const express = require('express');
const handleErrorAsync = require('../service/handleErrorAsync');
const {isAuth} = require("../service/auth");
const UsersControllers = require("../controllers/users");

const router = express.Router();

router.post('/sign_up', handleErrorAsync(UsersControllers.signUp));

router.post("/sign_in", handleErrorAsync(UsersControllers.signIn));

router.get('/profile/',isAuth, handleErrorAsync(UsersControllers.profile));

router.post("/updatePassword", isAuth, handleErrorAsync(UsersControllers.updatePassword));



module.exports = router;
