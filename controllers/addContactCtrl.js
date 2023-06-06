const { Contact } = require("../models/contacts");
const { HttpError } = require("../util");
const { addSchema } = require("../schemas");
const { tryCatchDecorator } = require("../decorators");

const addContactCtrl = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) throw new HttpError(400, error.message);
    const result = await Contact.create(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addContactCtrl: tryCatchDecorator(addContactCtrl),
};
