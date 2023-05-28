const api = require("../models/contacts");
const HttpError = require("../util/HttpError");
const { addSchema } = require("../schemas");

const updateContactCtrl = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) throw new HttpError(400, error.message);
    const { contactId } = req.params;
    const result = await api.updateContact(contactId, req.body);
    if (!result) throw new HttpError(404, "Not found");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateContactCtrl,
};
