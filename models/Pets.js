const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pets extends Model {}

// define table columns and configuration
Pets.init(
  {
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    birthday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },

    heath_condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Pets",
  }
);

module.exports = Pets;
