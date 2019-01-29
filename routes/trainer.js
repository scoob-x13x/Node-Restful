var express = require('express');
var router = express.Router();

var trainer_controller = require('../controllers/trainer');

router.get('/test', trainer_controller.test);

router.get('/', trainer_controller.alltrainer);

router.post('/', trainer_controller.trainer_create);

router.get('/:id', trainer_controller.trainer_details);

router.put('/:id', trainer_controller.trainer_update);

router.delete('/:id', trainer_controller.trainer_delete);

module.exports = router;