const { DataTypes } = require('sequelize');

let sequelize;

const Member = providedSequelize => {
	sequelize = providedSequelize || require('../config/database');

	const MemberModel = sequelize.define('Member', {
		member_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	MemberModel.associate = models => {
		MemberModel.belongsTo(models.User, {
			foreignKey: 'user_id',
		});
		MemberModel.belongsTo(models.Organization, {
			foreignKey: 'organization_id',
		});
	};

	return MemberModel;
};

module.exports = Member;
