const { HttpError, updateStatusContact } = require("../util");
const { tryCatchDecorator } = require("../decorators");

const updateStatusContactCtrl = async (req, res) => {
  if (!req.body) throw new HttpError(400, "missing field favorite");

  const result = await updateStatusContact(req.params.contactId, req.body);

  if (!result) throw new HttpError(404);
  res.json(result);
};
module.exports = {
  updateStatusContactCtrl: tryCatchDecorator(updateStatusContactCtrl),
};
