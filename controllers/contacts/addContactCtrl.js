const { Contact } = require("../../models");
const { HttpError } = require("../../util");
const { addSchema } = require("../../schemas");
const { tryCatchDecorator } = require("../../decorators");

const addContactCtrl = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) throw new HttpError(400, error.message);
  const { _id: owner } = req.user;
  console.log(owner);
  const result = await Contact.create({ ...req.body, owner });
  res.json(result);
};

module.exports = {
  addContactCtrl: tryCatchDecorator(addContactCtrl),
};
