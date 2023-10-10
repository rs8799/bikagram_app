const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/comment");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post("/createComment/:id", commentsController.createComment);

router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComment);

router.post("/createCommentBike/:id", commentsController.createCommentBike);

router.delete("/deleteCommentBike/:trailsid/:commentid", commentsController.deleteCommentBike);



module.exports = router;