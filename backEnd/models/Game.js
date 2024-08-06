const {model} = require('mongoose');

module.exports = model("Game", {
    title: String,
    genre: String,
    description: String
});