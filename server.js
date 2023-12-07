const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const sequelize = require('./config/database.js');

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
	max: 200, // Limit each IP to 200 requests per `window` (here, per 15 minutes)
	standardHeaders: true,
	legacyHeaders: false,
});

// Importing all keys that use .env file WILL USE LATER
const keys = require('./config/keys');
const server = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

server.set('trust proxy', 'loopback'); // Only trust requests from localhost

// Middleware
server.use(limiter);
server.use(cors(corsOptions));
server.use(express.json());
server.use(morgan('combined'));
//! note: do we need helmet package?

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
// code below needs to be rewritten for production architecture

// if (process.env.NODE_ENV === 'production') {
// 	const path = require('path');

// 	server.use(express.static('../client/build'));

// 	server.get('*', (req, res) => {
// 		res.sendFile(
// 			path.resolve(__dirname, '..', 'client', 'build', 'index.html'),
// 		);
// 	});
// }

server.listen(PORT, err => {
	if (err) {
		console.error('Server failed to start:', err);
		process.exit(1);
	}
	console.log(`> Ready on http://localhost:${PORT}`);
});
