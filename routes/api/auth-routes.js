const express = require("express");
const authRouter = express.Router();
const {
  signUp,
  logOut,
  signIn,
  getCurrent,
  addAvatarCtrl,verifyEmail
} = require("../../controllers/auth");

const { authenticate,upload } = require("../../middlewares");

authRouter.post("/register", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/logout", authenticate, logOut);
authRouter.get("/current", authenticate, getCurrent);
authRouter.get("/verify/:verificationToken",  verifyEmail);
authRouter.patch("/avatars",upload.single('avatar'),authenticate,addAvatarCtrl)
module.exports = authRouter;
