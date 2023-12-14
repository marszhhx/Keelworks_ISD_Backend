const { DataTypes } = require('sequelize');

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
	};

	return OrganizationModel;
};

module.exports = Organization;
