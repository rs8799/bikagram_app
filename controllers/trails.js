const cloudinary = require("../middleware/cloudinary");
const Trails = require("../models/Trails");
const Post = require("../models/Post");
const News = require("../models/News");
const Comment = require("../models/Comment");



module.exports = {
   /*  postBikes: async (req, res) => {
        try {
          // Upload image to cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
    
          await Trails.create({
            title: req.body.title,
            image: result.secure_url,
            cloudinaryId: result.public_id,
            caption: req.body.caption,
            likes: 0,
            user: req.user.id,
          });
          console.log("Post has been added!");
          res.redirect("/profile");
        } catch (err) {
          console.log(err);
        }
      }, */
    
  getTrails: async (req, res) => {
    try {
    const posts = await Post.find().sort({ createdAt: "desc" }).lean(); 
    res.render("trails.ejs", { posts: posts });
    } catch (err) {
    console.log(err);
    }
}, 
  getBikesPosts: async (req, res) => {
    try {
    const posts = await Post.find().sort({ createdAt: "desc" }).lean(); 
    res.render("bikes.ejs", { trails: trails });
    } catch (err) {
    console.log(err);
    }
}, 
getAddBikesPost: async (req, res) => {
    try {
    const trails = await Trails.find().sort({ createdAt: "desc" }).lean(); 
    res.render("addbikespost", { trails: trails });
    } catch (err) {
    console.log(err);
    }
},
getAddTrailsPost: async (req, res) => {
    try {
    const trails = await Trails.find().sort({ createdAt: "desc" }).lean(); 
    res.render("addtrailspost", { trails: trails });
    } catch (err) {
    console.log(err);
    }
},
getBikes: async (req, res) => {
    try {
    const trails = await Trails.find().sort({ createdAt: "desc" }).lean(); 
    res.render("bikes", { trails: trails });
    } catch (err) {
    console.log(err);
    }
},
getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("trailspost.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  //Home page ***********************
  getNews: async (req, res) => {
    try {
    const news = await News.find().sort({ createdAt: "desc" }).lean(); 
    res.render("cleanerhomepage", { news: news });

    } catch (err) {
    console.log(err);
    }
  }, 
  getNewsCommentsAndLikes: async (req, res) => {
    try {
      const news = await News.findById(req.params.id);
      const comments = await Comment.find({ post: req.params.id}).sort({ createdAt: "desc" }).lean();
      res.render("newscommentsandlikes.ejs", { news: news, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
   getTrails: async (req, res) => {
    try {
    const posts = await Post.find().sort({ createdAt: "desc" }).lean(); 
    res.render("trails.ejs", { posts: posts });
    } catch (err) {
    console.log(err);
    }
},
   
    getProfile: async (req, res) => {
        try {
          const posts = await Post.find({ user: req.user.id });
          res.render("profile.ejs", { posts: posts, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
  
    postNews: async (req, res) => {
      try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
       
        await News.create({
          title: req.body.title,
          image: result.secure_url,
          cloudinaryId: result.public_id,
          caption: req.body.caption,
          user: req.user.id,
        });
        console.log("Post has been added!");
         res.redirect("/todos");
 
/*          res.render('cleanerhomepage') 
 */    
      } catch (err) {
        console.log(err);
      }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
          })
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    