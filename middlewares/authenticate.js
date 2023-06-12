const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { HttpError } = require("../util");
const { JWT_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const {
    headers: { authorization = "" },
  } = req;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") next(new HttpError(401));
  try {
    const { id } = jwt.verify(token, JWT_KEY);

    const user = await User.findById(id);
    if (!user || user.token!==token) next(new HttpError(401));
    req.user = user;
  } catch {
    next(new HttpError(401));
  }

  next();
};

module.exports = authenticate;
