const Sequelize = require('sequelize');
const loadModels = require('../models');

let sequelize;

if (process.env.NODE_ENV === 'production') {
	// Set up your production database connection details here
	// We need to add these later this is for production connection
	sequelize = new Sequelize({
		dialect: 'postgres',
		host: process.env.DB_HOST,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		// other production-specific options...
	});
} else {
	// Use SQLite for development
	sequelize = new Sequelize({
		dialect: 'sqlite',
		storage: __dirname + '/../dev_database/dev_database.sqlite',
	});
}

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

module.exports = { sequelize, ...models };
