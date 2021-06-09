var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET home page. */
router.get('/', skillsCtrl.index);
router.get('/skills', skillsCtrl.index);
// router.get('/:id', dogsCtrl.show);

module.exports = router;
