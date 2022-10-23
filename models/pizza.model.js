const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PizzaSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    ingredient: {
        type: String
    },
    prix: {
        type: String
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

let pizzaSchema = mongoose.model('Pizza', PizzaSchema);

module.exports = pizzaSchema;
