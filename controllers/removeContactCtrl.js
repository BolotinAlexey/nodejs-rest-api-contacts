const Contact = require("../models/contacts");
const { HttpError } = require("../util");
const { tryCatchDecorator } = require("../decorators");

const removeContactCtrl = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) throw new HttpError(404);
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  removeContactCtrl: tryCatchDecorator(removeContactCtrl),
};
