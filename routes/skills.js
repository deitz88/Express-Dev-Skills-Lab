var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');


/* GET users listing. */
// app.get('/', function(req, res) {
//   res.render('dogs/index', {
//     dogs: dogsDb.getAll()
//   });
// });
router.get('/', skillsCtrl.index);
// router.get('/skills', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
