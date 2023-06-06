const Contact = require("../models/contacts");
const { HttpError } = require("../util");
const { tryCatchDecorator } = require("../decorators");

const updateContactCtrl = async (req, res) => {
  if (
    !Object.keys(req.body).some((key) =>
      ["name", "email", "phone", "favorite"].includes(key)
    )
  )
    throw new HttpError(400, "missing fields");
  const { contactId } = req.params;
  console.log(req.body);
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) throw new HttpError(404);
  res.json(result);
};

module.exports = {
  updateContactCtrl: tryCatchDecorator(updateContactCtrl),
};
