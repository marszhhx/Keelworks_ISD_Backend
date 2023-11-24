const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Uses .env in directory if not in production mode
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const whitelist = ['http://localhost:3000', 'add live hosting ip here'];

const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true,
};

// DDOS prevention
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 200, // Limit each IP to 1000 requests per `window` (here, per 15 minutes)
	standardHeaders: true,
	legacyHeaders: false,
});

// Importing all keys that use .env file WILL USE LATER
const keys = require('./config/keys');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: 'client' });
const handle = app.getRequestHandler();
const PORT = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(() => {
	const server = express();

	server.set('trust proxy', 'loopback'); // Only trust requests from localhost

	// Middleware
	server.use(limiter);
	server.use(cors(corsOptions));
	server.use(express.json());
	server.use(morgan('combined'));

	// Error handling middleware
	server.use((err, req, res, next) => {
		console.error(err.stack);
		res.status(500).send('Internal Server Error');
		next(err);
	});

	// Routes
	const routes = require('./routes/router.js');
	server.use(routes);

	// Conditional for dev and production modes
	if (!dev) {
		const path = require('path');
		server.use(express.static(path.join(__dirname, 'client', '.next')));
		server.get('*', (req, res) => {
			return handle(req, res);
		});
	} else {
		server.all('*', (req, res) => {
			return handle(req, res);
		});
	}

	server.listen(PORT, err => {
		if (err) {
			console.error('Server failed to start:', err);
			process.exit(1);
		  }
		console.log(`> Ready on http://localhost:${PORT}`);
	});
});
