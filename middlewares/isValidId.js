const { isValidObjectId } = require("mongoose");
const HttpError = require("../util/HttpError");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(404, `${id} is invalid id format`));
  }
  next();
};
module.exports = isValidId;
