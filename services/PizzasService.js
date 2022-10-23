class PizzasService {

    constructor({ Pizza, User }) {
        this.pizzaModel = Pizza;
        this.userModel = User;
    }

    async creatPizza(data) {

        let _pizza = await this.pizzaModel.findOne({
            name: data.name
        });

        if (_pizza) {
            return {
                message: 'Failed! Pizza already exists!'
            };
        } else {
            _pizza = new this.pizzaModel(data);
            await _pizza.save();

            return {
                message: `Pizza (${data.name}) created successfully!`
            };
        }
    }

    async listPizzas() {
        let _pizzas = await this.pizzaModel.find().exec();

        return {
            pizzas: _pizzas
        };
    }


    async updatePizza (pizzaId, data) {

        let _pizza = await this.pizzaModel.findById(pizzaId).exec();

        if (_pizza) {
            _pizza.name = data.name ? data.name : _pizza.name;
            _pizza.type = data.type ? data.type : _pizza.type;
            _pizza.ingredient = data.ingredient ? data.ingredient : _pizza.ingredient;
            _pizza.prix = data.prix ? data.prix : _pizza.prix;


            _pizza = await _pizza.save();

            return {
                message: 'Pizza Updated Successfully!',
                pizza: _pizza
            };
        } else {
            return {
                message: 'Failed! Pizza Not Found!'
            };
        }
    }

    async deletePizza(pizzaId) {
        await this.pizzaModel.findByIdAndRemove(pizzaId);

        return {
            message: 'Pizza Deleted Successfully!'
        };
    }

}

module.exports = PizzasService;
