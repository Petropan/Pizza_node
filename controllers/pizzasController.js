const { Pizza, User } = require('../models');
const PizzasService = require('../services/PizzasService');
const pizzasService = new PizzasService({ Pizza, User });

const creatPizza = async function(req, res, next) {

    let creatPizzaProcess = await pizzasService.creatPizza(req.body);

    return res.status(201).send(creatPizzaProcess);
};

const listPizzas = async function(req, res, next) {

    let listPizzasProcess = await pizzasService.listPizzas();

    return res.status(200).send(listPizzasProcess);
};

const updatePizza = async function(req, res, next) {

    let updatePizzaProcess = await pizzaService.updatePizza(req.params.pizzaId, req.body);

    return res.status(200).send(updatePizzaProcess);
};

const deletePizza = async function(req, res, next) {

    let deletePizzaProcess = await PizzaService.deletePizza(req.params.pizzaId);

    return res.status(200).send(deletePizzaProcess);
};



module.exports = {
    creatPizza,
    listPizzas,
    updatePizza,
    deletePizza,
}
