var express = require('express');
var router = express.Router();
var db = require('../database/database.js');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index');
});

//Post task
router.post('/', function (req, res, next) {

	db.push(
		{
			taskTitle: req.body.task,
			taskDone: false
		}
	)
	res.render('index', { db });

});

router.post('/clear', (req, res, next) => {
	db = [];
	res.render('index');
})

module.exports = router;
