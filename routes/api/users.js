


const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require("../../config/ensureLoggedIn");





// POST /api/users
router.route("/").post(usersCtrl.create);
router.route("/login").post(usersCtrl.login);
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);;


module.exports = router;