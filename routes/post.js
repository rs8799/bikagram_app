const express = require('express')
const router = express.Router()
const todosController = require('../controllers/trails') 
const postsController = require("../controllers/post");
const bikesPostController = require("../controllers/trailspost");
const trailsPostController = require("../controllers/trailspost");

const upload = require("../middleware/multer");
const { ensureAuth } = require('../middleware/auth')

router.get('/:id', ensureAuth, todosController.getNewsCommentsAndLikes) 


router.post("/createbikespost", upload.single("file"), bikesPostController.createBikesPost);
 
router.post("/createtrailspost", upload.single("file"), trailsPostController.createTrailsPost);
/*
router.put("/likePost/:id", postsController.likePost)

router.delete("/deletePost/:id", postsController.deletePost);

router.delete('/deleteTodo', todosController.deleteTodo) 
 */
module.exports = router