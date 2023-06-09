const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { HttpError } = require("../util");
const { JWT_KEY } = process.env;

const authenticate = async ({ headers: { authorization = "" } }, res, next) => {
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") next(new HttpError(401));
  try {
    const { id } = jwt.verify(token, JWT_KEY);
    const user = await User.findById(id);
    if (!user) next(new HttpError(401));
  } catch {
    next(new HttpError(401));
  }

  next();
};

module.exports = authenticate;
