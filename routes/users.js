const express = require('express');
const handleErrorAsync = require('../service/handleErrorAsync');
const { isAuth } = require("../service/auth");
const UsersControllers = require("../controllers/users");

const router = express.Router();

router.post("/sign_up", handleErrorAsync(UsersControllers.signUp));

router.post("/sign_in", handleErrorAsync(UsersControllers.signIn));

router.post("/updatePassword", handleErrorAsync(UsersControllers.updatePassword));

router.get("/profile/", isAuth, handleErrorAsync(UsersControllers.getProfile));

router.patch("/profile", isAuth, handleErrorAsync(UsersControllers.updateProfile));


module.exports = router;
