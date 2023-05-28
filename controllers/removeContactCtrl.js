const api = require("../models/contacts");
const HttpError = require("../util/HttpError");

const removeContactCtrl = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await api.removeContact(contactId);
    if (!result) throw new HttpError(404);
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  removeContactCtrl,
};
