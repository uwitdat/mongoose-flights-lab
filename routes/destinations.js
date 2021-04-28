var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations')


router.put(`/desinations/:id/show`, destinationsCtrl.createDestination)
router.post('/destinations/:id/show', destinationsCtrl.createDestination )

module.exports = router;