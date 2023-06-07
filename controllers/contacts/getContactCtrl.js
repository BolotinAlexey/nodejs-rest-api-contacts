const { Contact } = require("../../models");
const { HttpError } = require("../../util");
const { tryCatchDecorator } = require("../../decorators");

const getContactCtrl = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) throw new HttpError(404);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContactCtrl: tryCatchDecorator(getContactCtrl),
};
