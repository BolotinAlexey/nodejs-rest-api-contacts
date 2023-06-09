const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { HttpError } = require("../../util");
const { schemaRegister } = require("../../schemas");
const { salt } = require("../../constants");

const signUp = async ({ body }, res) => {
  const { err } = schemaRegister.validate(body);
  if (err) throw new HttpError(400, err.message);

  let { email, password } = body;

  const user = await User.findOne({ email });
  if (user) throw new HttpError(409, "Email in use");
  password = await bcrypt.hash(password, salt);
  const newUser = await User.create({ ...body, password });
  res.json(newUser);
};

module.exports = signUp;
