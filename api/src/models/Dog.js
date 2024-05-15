const { Sequelize, DataTypes } = require('sequelize');
// const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      primaryKey: true,
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()') //SQL PLANO
    },
    image: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    }
  }, { timestamps: false });
};

// type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4, // or uuidv4
//       primaryKey: true,
//       allowNull: false