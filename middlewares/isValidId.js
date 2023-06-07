const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../util");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(new HttpError(404, `${contactId} is invalid id format`));
  }
  next();
};
module.exports = isValidId;
