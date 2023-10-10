const express = require("express");
const router = express.Router();

const newsController = require("../controllers/news");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post("/createnews/:id", newsController.createNews);

router.delete("/deleteNews/:newsid", newsController.deleteNews);

/*
router.post("/createCommentBike/:id", commentsController.createCommentBike);

router.delete("/deleteCommentBike/:trailsid/:commentid", commentsController.deleteCommentBike); */



module.exports = router;