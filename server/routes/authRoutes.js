const express = require("express");
const { login, register, logout } = require("../controllers/authController");
const auth = require("../middleware/auth");

const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.post("/logout", auth, logout);

module.exports = route;