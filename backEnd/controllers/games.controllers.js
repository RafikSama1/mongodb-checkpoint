const Game = require('../models/Game');

exports.index = async(req, res) => {
    const games = await Game.find();
    res.json(games);
};
exports.show = async(req, res) => {
    const game = await Game.findById(req.params.id);
    res.json(game);
};
exports.store = async(req, res) => {
    const game = await Game.create(req.body);
    res.json(game);
};
exports.update = async(req, res) => {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(game);
};
exports.delete = async(req, res) => {
    await game.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully');
};