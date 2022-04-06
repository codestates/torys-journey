'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.bookmark, {
        foreignKey: "userId",
        // onDelete: "cascade"
      });
      user.hasMany(models.review, {
        foreignKey: "userId",
        // onDelete: "cascade"
      });
      user.hasMany(models.photo, {
        foreignKey: "userId",
        // onDelete: "cascade"
      });
      user.hasMany(models.restaurant, {
        foreignKey: "userId",
        // onDelete: "cascade"
      });
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING(1023),
    oauthId: DataTypes.INTEGER,
    provider: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};