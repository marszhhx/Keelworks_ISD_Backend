const { DataTypes } = require('sequelize');

let sequelize;

//! test model replace later

const User = providedSequelize => {
	sequelize = providedSequelize || require('../config/database');

	const UserModel = sequelize.define('User', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	return UserModel;
};

module.exports = User;
