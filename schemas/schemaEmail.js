const Joi = require("joi");
const { emailRegexp } = require("../constants");

const schemaEmail = Joi.object({
    email: Joi.string().required().pattern(emailRegexp),
})

module.exports = schemaEmail;