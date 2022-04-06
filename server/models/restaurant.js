'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      restaurant.hasMany(models.bookmark, {
        foreignKey: "restaurantId",
        // onDelete: "cascade"
      });
      restaurant.hasMany(models.review,{
        foreignKey: "restaurantId",
        // onDelete: "cascade"
      });
      restaurant.hasMany(models.hashtag_restaurant, {
        foreignKey: "restaurantId",
        // onDelete: "cascade"
      });
      restaurant.hasMany(models.photo, {
        foreignKey: "restaurantId",
        // onDelete: "cascade"
      });
    }
  }
  restaurant.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    officeHours: DataTypes.STRING,
    detailInfo: DataTypes.STRING,
    rating: DataTypes.NUMBER,
    caution: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'restaurant',
  });
  return restaurant;
};