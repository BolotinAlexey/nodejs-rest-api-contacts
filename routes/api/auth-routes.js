const express = require("express");
const authRouter = express.Router();
const { signUp, logOut, signIn } = require("../../controllers/auth");
authRouter.post("/register", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/logout", logOut);

module.exports = authRouter;
