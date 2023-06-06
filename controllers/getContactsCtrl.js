const Contact = require("../models/contacts");
const { tryCatchDecorator } = require("../decorators");

const getContactsCtrl = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};

module.exports = {
  getContactsCtrl: tryCatchDecorator(getContactsCtrl),
};
