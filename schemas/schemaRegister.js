const Joi = require("joi");
const { emailRegexp, minlengthPassword } = require("../constants");

const schemaRegister = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().pattern(emailRegexp),
  password: Joi.string().required().min(minlengthPassword),
});

module.exports = schemaRegister;
