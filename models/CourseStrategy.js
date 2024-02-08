const { DataTypes } = require('sequelize');

let sequelize;
const CourseStrategy = providedSequelize => {
    sequelize = providedSequelize || require('../config/database');
    return sequelize.define('CourseStrategy', {

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

module.exports = CourseStrategy;