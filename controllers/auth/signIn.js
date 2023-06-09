const bcrypt = require("bcrypt");
const { HttpError } = require("../../util");
const { schemaLogin } = require("../../schemas");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { JWT_KEY } = process.env;
const { User } = require("../../models");

const signIn = async ({ body }, res) => {
  const { error } = schemaLogin.validate(body);
  if (error) throw new HttpError(400, error.message);
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user.id,
  };
  const token = jwt.sign(payload, JWT_KEY, { expiresIn: "24h" });
  res.json(token);
};

module.exports = signIn;
