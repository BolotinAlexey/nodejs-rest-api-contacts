const { Contact } = require("../../models");
const { HttpError } = require("../../util");
const { tryCatchDecorator } = require("../../decorators");

const getContactCtrl = async ({params:{contactId},user}, res, next) => {
  const result = await Contact.findOne({ _id: contactId, owner: user.id });
  if (!result) throw new HttpError(404);
  res.json(result);
};

module.exports = {
  getContactCtrl: tryCatchDecorator(getContactCtrl),
};
