const api = require("../models/contacts");
const { tryCatchDecorator } = require("../decorators");

const getContactsCtrl = async (req, res) => {
  const data = await api.listContacts();
  res.json(data);
};

module.exports = {
  getContactsCtrl: tryCatchDecorator(getContactsCtrl),
};
