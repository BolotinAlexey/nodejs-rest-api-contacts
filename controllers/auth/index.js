const { tryCatchDecorator } = require("../../decorators");
const logOut = require("./logOut");
const signIn = require("./signIn");
const signUp = require("./signUp");
const getCurrent = require("./getCurrent");

module.exports = {
  logOut: tryCatchDecorator(logOut),
  signIn: tryCatchDecorator(signIn),
  signUp: tryCatchDecorator(signUp),
  getCurrent: tryCatchDecorator(getCurrent),
};
