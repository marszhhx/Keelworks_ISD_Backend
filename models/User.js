const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
let sequelize;

//! test model replace later

const User = providedSequelize => {
	sequelize = providedSequelize || require('../config/database');

	const UserModel = sequelize.define('User', {
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
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			// validate: {
			// 	isEmail: true,
			// }
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	return UserModel;
};

module.exports = User;