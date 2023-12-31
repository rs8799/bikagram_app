const Comment = require("../models/Comment");
const Post = require("../models/Post");

module.exports = {
    createComment: async (req, res) => {
        try {
            await Comment.create({
                comment: req.body.comment,
                likes: 0,
                post: req.params.id,
                createdByUsername: req.user.userName, 
                createdById: req.user.id
            });
        console.log("Comment has been added!");
        res.redirect(`/trailsrate/${req.params.id}`);
        } catch (err) {
            console.log(err);
        }
    },
    createCommentBike: async (req, res) => {
        try {
            await Comment.create({
                comment: req.body.comment,
                likes: 0,
                post: req.params.id,
                createdByUsername: req.user.userName, 
                createdById: req.user.id
            });
        console.log("Comment has been added!");
        res.redirect(`/bikes/${req.params.id}`);
        } catch (err) {
            console.log(err);
        }
    },
   
    deleteComment: async (req, res) => {
        try {
          await Comment.deleteOne({_id: req.params.commentid})
          console.log("Comment has been deleted!");
          res.redirect("/trailsrate/" + req.params.postid);
        } catch (err) {
          console.log(err);
        }
      },
    deleteCommentBike: async (req, res) => {
        try {
          await Comment.deleteOne({_id: req.params.commentid})
          console.log("Comment has been deleted!");
          res.redirect("/bikes/" + req.params.trailsid);
          console.log("HI")
        } catch (err) {
          console.log(err);
        }
      },
    };