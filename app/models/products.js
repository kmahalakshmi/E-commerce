'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model { };
  Products.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: function () {
        return uuid()
      }
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    modelNo: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    weight: DataTypes.STRING,
    height: DataTypes.STRING,
    price: DataTypes.STRING,
    customerRating: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};