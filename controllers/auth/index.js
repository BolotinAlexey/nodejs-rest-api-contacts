const { tryCatchDecorator } = require("../../decorators");
const logOut = require("./logOut");
const signIn = require("./signIn");
const signUp = require("./signUp");

module.exports = {
  logOut: tryCatchDecorator(logOut),
  signIn: tryCatchDecorator(signIn),
  signUp: tryCatchDecorator(signUp),
};
