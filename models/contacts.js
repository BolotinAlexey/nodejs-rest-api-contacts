const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../middlewares");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
// const { nanoid } = require("nanoid");
// const fs = require("fs/promises");
// const path = require("path");

// const contactsPath = path.join(__dirname, "/contacts.json");

// const writeJsonFile = (data) =>
//   fs.writeFile(contactsPath, JSON.stringify(data, null, 2));

// async function listContacts() {
//   const req = await fs.readFile(contactsPath);
//   return JSON.parse(req);
// }

// async function getContactById(contactId) {
//   const data = await listContacts();
//   return data.find(({ id }) => id === contactId) || null;
// }

// async function removeContact(contactId) {
//   const data = await listContacts();

//   const result = data.find(({ id }) => id === contactId) || null;
//   if (result) writeJsonFile(data.filter(({ id }) => id !== result.id));
//   return result;
// }

// async function addContact({ name, email, phone }) {
//   const data = await listContacts();
//   const newData = [...data, { id: nanoid(), name, email, phone }];

//   writeJsonFile(newData);
//   return newData;
// }

// async function updateContact(contactId, obj) {
//   const data = await listContacts();
//   const index = data.findIndex(({ id }) => id === contactId);
//   if (index === -1) return null;
//   data[index] = { ...data[index], ...obj };
//   writeJsonFile(data);
//   return data[index];
// }

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };
