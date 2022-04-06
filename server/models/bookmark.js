'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookmark.belongsTo(models.user, {
        foreignKey: "userId",
        // onDelete: "cascade"
      });
      bookmark.belongsTo(models.restaurant, {
        foreignKey: "restaurantId",
        // onDelete: "cascade"
      });
    }
  }
  bookmark.init({
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bookmark',
  });
  return bookmark;
};