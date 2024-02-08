const { DataTypes } = require('sequelize');

let sequelize;
const CourseStructure = providedSequelize => {
    sequelize = providedSequelize || require('../config/database');
    return sequelize.define('CourseStructure', {
        module_heading: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lesson_heading: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lesson_details: {
            type: DataTypes.STRING,
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

module.exports = CourseStructure;