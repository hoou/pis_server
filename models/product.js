'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    name: DataTypes.STRING(50),
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10, 2)
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};