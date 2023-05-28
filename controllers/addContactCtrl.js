const api = require("../models/contacts");
const HttpError = require("../util/HttpError");
const { addSchema } = require("../schemas");

const addContactCtrl = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) throw new HttpError(400, error.message);
    const result = await api.addContact(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addContactCtrl,
};
