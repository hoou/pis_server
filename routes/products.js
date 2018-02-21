const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res, next) => {
		models.product.findAll().then(products => {
			res.json(products);
		})
	}
);

router.post('/', (req, res, next) => {
	if (!req.body.name || !req.body.description || !req.body.price) {
		let err = new Error('Missing some of required fields');
		err.status = 400;
		return next(err);
	}

	models.product.create(req.body).then(() => {
		res.sendStatus(201);
	})
});

router.delete('/:id', (req, res, next) => {
	models.product.destroy({
		where: {'id': req.params.id}
	}).then(num_of_deleted => {
			if (num_of_deleted === 0) {
				let err = new Error('Product with id \'' + req.params.id + '\' doesn\'t exist');
				err.status = 404;
				return next(err);
			}
			res.sendStatus(200);
		}, err => {
			next(err);
		}
	);
});

router.put('/:id', (req, res, next) => {
	models.product.update(req.body, {
		where: {'id': req.params.id}
	}).then(num_of_updated => {
		if (num_of_updated[0] === 0) {
			let err = new Error('Product with id \'' + req.params.id + '\' doesn\'t exist');
			err.status = 404;
			return next(err);
		}
		res.sendStatus(200);
	}, err => {
		next(err);
	})
});

module.exports = router;
