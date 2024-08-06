const {Router} = require('express');
const gamesController = require('../controllers/games.controllers');

const router = Router();

router.get('/Games', gamesController.index);
router.get('/Games/:id', gamesController.show);
router.post('/Games', gamesController.store);
router.put('/Games/:id', gamesController.update);
router.delete('/Games/:id', gamesController.delete);

module.exports = router;