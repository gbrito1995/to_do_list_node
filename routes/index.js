var express = require('express');
var router = express.Router();
var db = require('../database/database.js');
let taskObj = db.taskObj;
let i = db.i;

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { taskObj });
});

//Post task
router.post('/', function (req, res, next) {

	taskObj.push(
		{
			id: i++,
			taskTitle: req.body.task,
			taskDone: false
		}
	)

	res.render('index', { taskObj });

});

//Clear all tasks
router.post('/clear', (req, res, next) => {
	taskObj = [];
	i = 0;
	res.render('index', { taskObj });
})

router.post('/del/:id', (req, res, next) => {

	let el = taskObj.filter((element) => {

		return element.id != Number(req.params.id);

	});

	taskObj = el;

	res.render('index', { taskObj });

})


module.exports = router;
