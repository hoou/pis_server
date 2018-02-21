'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};