const { DataTypes } = require('sequelize');
let sequelize;
// NeedsAnalysisModel.belongsTo(IsdDocument, { foreignKey: 'isdDocument_id' });
const NeedsAnalysis = providedSequelize => {
    sequelize = providedSequelize || require('../config/database');
    const NeedsAnalysisModel = sequelize.define('User', {
        submission_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        problem_data: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        problem_statement: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        success_statement: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        audience_definition: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        audience_benefits: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    NeedsAnalysisModel.associate = models => {
        NeedsAnalysisModel.belongsTo(models.IsdDocument, { foreignKey: 'isdDocument_id' });
    };
    return NeedsAnalysisModel;
};

module.exports = NeedsAnalysis;