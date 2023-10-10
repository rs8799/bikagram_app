const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/trails");
const postBikesRoutes = require("./routes/postbikes");
const createPostRoutes = require("./routes/post");
const createTrailsRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
const newsRoutes = require("./routes/news");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
/* app.use(express.static("public"));
 */
app.use(express.static(__dirname + '/csscleaner'));
 app.use(express.static(__dirname + '/jscleaner'));
 app.use(express.static(__dirname + '/assets'));
//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/todos", createPostRoutes);
app.use("/trailsrate", postRoutes);
app.use("/bikes", postBikesRoutes);
app.use("/profile", createPostRoutes)
app.use("/addbikespost", createTrailsRoutes)
app.use("/addtrailspost", createTrailsRoutes)
app.use("/comment", commentRoutes);
app.use("/news", newsRoutes);


//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
