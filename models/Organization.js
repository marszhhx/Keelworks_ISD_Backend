const { DataTypes } = require('sequelize');

let sequelize;

const Organization = providedSequelize => {
	sequelize = providedSequelize || require('../config/database');

	const OrganizationModel = sequelize.define('Organization', {
		id: {
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
		OrganizationModel.hasMany(models.IsdDocument, {
			foreignKey: 'organization_id',
		});

		OrganizationModel.hasMany(models.User, { foreignKey: 'id' });
	};

	return OrganizationModel;
};

module.exports = Organization;
