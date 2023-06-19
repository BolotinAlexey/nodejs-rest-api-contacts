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
  const { email, password,verify } = body;
  let user = await User.findOne({ email });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new HttpError(401, "Email or password is wrong");
  }
  if (!verify) {
    throw new HttpError(401, "Email is not verified")}

  const payload = {
    id: user.id,
  };
  const token = jwt.sign(payload, JWT_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user.id, { token });
  user = { email, subscription: user.subscription }
  res.json({token,user}).status(200);
};

module.exports = signIn;
