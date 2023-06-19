const { tryCatchDecorator } = require("../../decorators");
const logOut = require("./logOut");
const signIn = require("./signIn");
const signUp = require("./signUp");
const verifyEmail = require("./verifyEmail");
const getCurrent = require("./getCurrent");
const repeatSendEmail = require("./repeatSendEmail");
const  addAvatarCtrl = require("./addAvatarCtrl");

module.exports = {
  logOut: tryCatchDecorator(logOut),
  signIn: tryCatchDecorator(signIn),
  signUp: tryCatchDecorator(signUp),
  getCurrent: tryCatchDecorator(getCurrent), addAvatarCtrl: tryCatchDecorator(addAvatarCtrl),
  verifyEmail:tryCatchDecorator(verifyEmail),
  repeatSendEmail:tryCatchDecorator(repeatSendEmail)
};
