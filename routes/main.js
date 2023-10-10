const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const mainPageController = require('../controllers/trails')
const upload = require("../middleware/multer");
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)


router.get('/todos', ensureAuth, mainPageController.getNews) 

router.post('/todos', ensureAuth, upload.single("file"),mainPageController.postNews) 


router.get('/bikes', mainPageController.getBikes)
/* 
router.post('/bikes', mainPageController.postBikes) */

router.get('/profile', mainPageController.getProfile)

router.get('/addbikespost', mainPageController.getAddBikesPost)

router.get('/addtrailspost', mainPageController.getAddTrailsPost)


router.get('/login', authController.getLogin)

router.post('/login', authController.postLogin)

router.get('/logout', authController.logout)

router.get('/signup', authController.getSignup)

router.post('/signup', authController.postSignup)

module.exports = router