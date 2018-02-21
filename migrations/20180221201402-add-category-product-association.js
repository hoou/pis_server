'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
		  Add altering commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
		*/

		queryInterface.addColumn('products', 'category_id', Sequelize.INTEGER);
		queryInterface.addConstraint('products', ['category_id'], {
			type: 'foreign key',
			references: {
				table: 'categories',
				field: 'id'
			},
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		return queryInterface;
	},

	down: (queryInterface, Sequelize) => {
		/*
		  Add reverting commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.dropTable('users');
		*/
		return queryInterface.removeColumn('products', 'category_id')
	}
};
