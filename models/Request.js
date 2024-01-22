const { DataTypes } = require('sequelize');

let sequelize;
const Request = providedSequelize => {
    sequelize = providedSequelize || require('../config/database');
    return sequelize.define('Request', {
        submission_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        problem_statement: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        problem_data: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        value_of_change: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        people_needed_to_attend: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        expected_growth: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        priority_urgency: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
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

module.exports = Request;

