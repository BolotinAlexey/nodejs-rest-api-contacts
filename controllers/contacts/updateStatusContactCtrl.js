const { HttpError } = require("../../util");
const { tryCatchDecorator } = require("../../decorators");
const { Contact } = require("../../models");

const updateStatusContact = async (id, body) => {
  console.log("--", Contact);
  return await Contact.findByIdAndUpdate(id, body, {
    new: true,
  });
};

const updateStatusContactCtrl = async (req, res) => {
  if (!req.body) throw new HttpError(400, "missing field favorite");

  const result = await updateStatusContact(req.params.contactId, req.body);

  if (!result) throw new HttpError(404);
  res.json(result);
};
module.exports = {
  updateStatusContactCtrl: tryCatchDecorator(updateStatusContactCtrl),
};
