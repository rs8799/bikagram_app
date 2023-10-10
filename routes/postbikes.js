const express = require('express')
const router = express.Router()
const todosController = require('../controllers/post') 

const BikeController = require("../controllers/trails");

const upload = require("../middleware/multer");
const { ensureAuth } = require('../middleware/auth')



router.get('/:id', todosController.getBikes)

router.get('/', ensureAuth, BikeController.getBikesPosts)

/* router.post("/createPost", upload.single("file"), postsController.createPost); */


/* router.post("/createbikespost", upload.single("file"), bikesPostController.createBikesPost);

router.post("/createtrailspost", upload.single("file"), trailsPostController.createTrailsPost);
*/

router.put("/likePost/:id", todosController.likePostBikes)

router.delete("/deletePost/:id", todosController.deletePostBike);
/* 
/* router.delete('/deleteTodo', todosController.deleteTodo) */
 
module.exports = router