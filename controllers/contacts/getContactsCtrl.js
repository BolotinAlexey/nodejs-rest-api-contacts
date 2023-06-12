const { Contact } = require("../../models");
const { tryCatchDecorator } = require("../../decorators");

const getContactsCtrl = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Contact.find({ owner });
  res.json(data);
};

module.exports = {
  getContactsCtrl: tryCatchDecorator(getContactsCtrl),
};
