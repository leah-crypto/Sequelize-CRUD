// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.get('/posts', controllers.getAllPosts)
router.post('/posts', controllers.createPost)

router.get('/posts/:postId', controllers.getPostById)

router.put('/posts/:postId', controllers.updatePost)

router.delete('/posts/:postId', controllers.deletePost)
module.exports = router;