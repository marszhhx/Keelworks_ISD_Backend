const Sequelize = require('sequelize');
const User = require("./User");
const fs = require('fs');
const path = require('path');

//registers all models
// const loadModels = sequelize => {
// 	const models = {};
// 	const modelsPath = path.join(__dirname);

// 	fs.readdirSync(modelsPath)
// 		.filter(file => file.endsWith('.js') && file !== 'index.js')
// 		.forEach(file => {
// 			const model = require(path.join(modelsPath, file))(
// 				sequelize,
// 				Sequelize,
// 			);
// 			models[model.name] = model;
// 		});

// 	// Execute associate function if available
// 	Object.values(models).forEach(model => {
// 		if (model.associate) {
// 			model.associate(models);
// 		}
// 	});

// 	return models;
// };

// module.exports = loadModels;

