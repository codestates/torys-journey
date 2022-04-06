'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.belongsTo(models.user, {
        foreignKey: "userId",
        // onDelete: "cascade"
      });
      review.belongsTo(models.restaurant, {
        foreignKey: "restaurantId",
        // onDelete: "cascade"
      });
    }
  }
  review.init({
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};