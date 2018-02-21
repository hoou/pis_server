'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    name: DataTypes.STRING(50)
  }, {});
  category.associate = function(models) {
    // associations can be defined here
	  category.hasMany(sequelize.models.product, {foreignKey: 'category_id'})
  };
  return category;
};