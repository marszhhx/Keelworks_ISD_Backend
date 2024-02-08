const { DataTypes } = require('sequelize');

let sequelize;
const Storyboard= providedSequelize => {
    sequelize = providedSequelize || require('../config/database');
    return sequelize.define('Storyboard', {
        created_at: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    });
};

module.exports = Storyboard;