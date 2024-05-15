const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Temperament', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: Sequelize.literal('uuid_generate_v4()') 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false });
};