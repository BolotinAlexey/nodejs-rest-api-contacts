const express = require("express");
const authRouter = express.Router();
const {
  signUp,
  logOut,
  signIn,
  getCurrent,
} = require("../../controllers/auth");
const { authenticate } = require("../../middlewares");

authRouter.post("/register", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/logout", authenticate, logOut);
authRouter.get("/current", authenticate, getCurrent);
module.exports = authRouter;
