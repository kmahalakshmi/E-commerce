'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  class Carts extends Model { };
  Carts.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: function () {
        return uuid()
      }
    },
    userId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    totalAmount: DataTypes.STRING,
    products: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};