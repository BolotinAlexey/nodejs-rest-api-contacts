const { Contact } = require("../../models");
const { HttpError } = require("../../util");
const { tryCatchDecorator } = require("../../decorators");

const removeContactCtrl = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) throw new HttpError(404);
  res.json({ message: "contact deleted" });
};

module.exports = {
  removeContactCtrl: tryCatchDecorator(removeContactCtrl),
};
