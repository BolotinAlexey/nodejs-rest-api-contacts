const Joi = require("joi");
const { emailRegexp, minlengthPassword } = require("../constants");

const schemaLogin = Joi.object({
  email: Joi.string().required().pattern(emailRegexp),
  password: Joi.string().required().min(minlengthPassword),
});

module.exports = schemaLogin;
