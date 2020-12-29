'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model { };
  Orders.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: function () {
        return uuid()
      }
    },
    userid: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    courierCompanyName: DataTypes.STRING,
    trackingNo: DataTypes.STRING,
    deliveryDate: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    transactionId: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};