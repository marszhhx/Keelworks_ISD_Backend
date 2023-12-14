const Sequelize = require('sequelize');
require('dotenv').config();
const loadModels = require('../models');

let sequelize;

if (process.env.NODE_ENV === 'production') {
	// Set up your production database connection details here
	sequelize = new Sequelize({
		dialect: 'mysql',
		host: process.env.DB_HOST,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	});
} else {
	// Use mySQL for development
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,
		{
			host: '127.0.0.1',
			dialect: 'mysql',
			port: 3306,
		},
	);
}

// this loads all the sequelize models
const models = loadModels(sequelize);

sequelize
	.sync({ force: false })
	.then(() => {
		console.log('Database and tables created!');

		return sequelize.authenticate();
	})
	.catch(err => {
		console.error('Error creating database and tables:', err);
	});

module.exports = { sequelize };
