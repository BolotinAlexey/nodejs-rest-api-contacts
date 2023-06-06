const { Contact } = require("../models/contacts");

const updateStatusContact = async (id, body) => {
  return await Contact.findByIdAndUpdate(id, body, {
    new: true,
  });
};

module.exports = updateStatusContact;
