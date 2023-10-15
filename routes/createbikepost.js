const express = require('express')
const router = express.Router()
const todosController = require('../controllers/trails') 
const postsController = require("../controllers/post");
const bikesPostController = require("../controllers/post");
const trailsPostController = require("../controllers/post");

const upload = require("../middleware/multer");
const { ensureAuth } = require('../middleware/auth')




router.post("/createbikespost", upload.single("file"), postsController.createBikesPost);

/* router.post("/createtrailspost", upload.single("file"), trailsPostController.createTrailsPost);
 */


module.exports = router