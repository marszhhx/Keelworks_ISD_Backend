const { DataTypes } = require('sequelize');
let sequelize;

const User = providedSequelize => {
	sequelize = providedSequelize || require('../config/database');

	const UserModel = sequelize.define('User', {
		user_id: {
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

	UserModel.associate = models => {
		UserModel.hasMany(models.Member, {
			foreignKey: 'member_id',
		});
	};

	return UserModel;
};

module.exports = User;
