// import Model class and DataTypes object from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// so Comment class can inherits all functions from Model class
class Comment extends Model {}

// create table column & configuration for Comment Model
Comment.init(
  {
    // define the table column
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      validate: {
        len: [3],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  // define configuration
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
