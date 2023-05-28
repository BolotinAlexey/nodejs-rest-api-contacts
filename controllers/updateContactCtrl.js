const api = require("../models/contacts");
const HttpError = require("../util/HttpError");

const updateContactCtrl = async (req, res, next) => {
  try {
    if (
      !Object.keys(req.body).some((key) =>
        ["name", "email", "phone"].includes(key)
      )
    )
      throw new HttpError(400, "missing fields");
    const { contactId } = req.params;
    const result = await api.updateContact(contactId, req.body);
    if (!result) throw new HttpError(404);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateContactCtrl,
};
