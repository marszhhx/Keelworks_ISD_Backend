const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

let sequelize;

const Organization = providedSequelize => {
	sequelize = providedSequelize || require('../config/database');

	const OrganizationModel = sequelize.define('Organization', {
		organization_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	OrganizationModel.associate = models => {
		OrganizationModel.hasMany(models.Member, {
			foreignKey: 'member_id',
		});

		OrganizationModel.hasMany(models.IsdDocument, {
			foreignKey: 'document_id',
		});
	};

	return OrganizationModel;
};

module.exports = Organization;
