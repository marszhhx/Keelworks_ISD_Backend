const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

// Function to check if the required module is a valid Sequelize model definition
const isValidModelDefinition = modelDefinition =>
	modelDefinition && typeof modelDefinition === 'function';

// Function to check if the model instance is a valid Sequelize model
const isValidModel = model =>
	model &&
	model.name &&
	model.init &&
	model.prototype instanceof Sequelize.Model;

// Function to load and register models
const loadModels = sequelize => {
	const models = {};
	const modelsPath = path.join(__dirname);

	fs.readdirSync(modelsPath)
		.filter(file => file.endsWith('.js') && file !== 'index.js')
		.forEach(file => {
			const filePath = path.join(modelsPath, file);

			try {
				delete require.cache[require.resolve(filePath)];

				const modelDefinition = require(filePath);

				if (!isValidModelDefinition(modelDefinition)) {
					console.warn(
						`Warning: Ignoring file ${filePath} as it doesn't seem to export a valid Sequelize model definition.`,
					);
					return;
				}

				const model = modelDefinition(sequelize, Sequelize);

				if (!isValidModel(model)) {
					console.warn(
						`Warning: Ignoring file ${filePath} as it doesn't seem to be a valid Sequelize model.`,
					);
					return;
				}

				models[model.name] = model;

				if (model.associate) {
					model.associate(models);
				}
			} catch (error) {
				console.warn(
					`Warning: Error while loading file ${filePath}`,
					error,
				);
			}
		});

	return models;
};

module.exports = loadModels;
