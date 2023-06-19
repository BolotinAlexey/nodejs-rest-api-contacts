const Joi = require("joi");
const {
  emailRegexp,
  minlengthPassword,
  subscribtion,
} = require("../constants");

const schemaRegister = Joi.object({
  email: Joi.string().required().pattern(emailRegexp),
  password: Joi.string().required().min(minlengthPassword),
  subscription: Joi.string().allow(...subscribtion),
});

module.exports = schemaRegister;
