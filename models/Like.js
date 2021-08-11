const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Like extends Model {}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },

    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "comment",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "like",
  }
);

module.exports = Like;
