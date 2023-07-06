const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        //does not allow null int
      },
      category_name: {
        type: DataTypes.STRING
        //doesnt allow null values
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
