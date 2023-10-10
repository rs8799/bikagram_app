const News = require("../models/News")

module.exports = {
  createNews: async (req, res) => {
      try {
          await News.create({
              news: req.body.comment,
              newsPost: req.params.id,
              createdByUsername: req.user.userName, 
              createdById: req.user.id
          });
      console.log("News has been added!");
      res.redirect(`/todos`);
      } catch (err) {
          console.log(err);
      }
    },
    deleteNews: async (req, res) => {
      try {
        await News.deleteOne({_id: req.params.commentid})
        console.log("Comment has been deleted!");
        res.redirect("/todos");
      } catch (err) {
        console.log(err);
      }
    },
};

//tomorrow have to update trails.js controllers to match the model as they are not matching