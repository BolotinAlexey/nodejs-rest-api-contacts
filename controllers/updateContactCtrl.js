const api = require("../models/contacts");
const HttpError = require("../util/HttpError");
const { tryCatchDecorator } = require("../decorators");

const updateContactCtrl = async (req, res) => {
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
};

module.exports = {
  updateContactCtrl: tryCatchDecorator(updateContactCtrl),
};
