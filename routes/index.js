// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

module.exports = router;