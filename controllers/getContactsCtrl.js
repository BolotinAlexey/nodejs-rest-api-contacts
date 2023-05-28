const api = require("../models/contacts");

const getContactsCtrl = async (req, res, next) => {
  try {
    const data = await api.listContacts();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContactsCtrl,
};
