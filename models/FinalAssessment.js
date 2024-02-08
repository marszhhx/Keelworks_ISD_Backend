const { DataTypes } = require('sequelize');
let sequelize;

const FinalAssessment = providedSequelize => {
    sequelize = providedSequelize || require('../config/database');
    return sequelize.define('Objective', {
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

module.exports = FinalAssessment;
