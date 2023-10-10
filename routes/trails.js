const express = require('express')
const router = express.Router()
const todosController = require('../controllers/trails') 
const postsController = require("../controllers/post");
const upload = require("../middleware/multer");
const { ensureAuth } = require('../middleware/auth')

router.get('/:id', ensureAuth, postsController.getTrailsComments)

router.get('/', ensureAuth, todosController.getTrails)

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost)

router.delete("/deletePost/:id", postsController.deletePost);

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router