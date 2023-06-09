const { Contact } = require("../../models");
const { HttpError } = require("../../util");
const { tryCatchDecorator } = require("../../decorators");

const getContactCtrl = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) throw new HttpError(404);
  res.json(result);
};

module.exports = {
  getContactCtrl: tryCatchDecorator(getContactCtrl),
};
