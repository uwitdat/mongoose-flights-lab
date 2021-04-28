var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')


router.get('/', flightsCtrl.getIndex);
router.get('/new', flightsCtrl.getNew);
router.get('/:id/show', flightsCtrl.getOne)

router.post('/', flightsCtrl.create);




module.exports = router