const express = require('express');
const router = express.Router();

const pizzasController = require('../controllers/pizzasController');

router.post('/pizzas', pizzasController.creatPizza);

router.get('/pizzas', pizzasController.listPizzas);

router.put('/pizzas/:pizzaId', pizzasController.updatePizza);

router.delete('/pizzas/:pizzaId', pizzasController.deletePizza);

module.exports = router;
