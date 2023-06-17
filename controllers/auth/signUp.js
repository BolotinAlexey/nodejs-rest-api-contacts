const bcrypt = require("bcrypt");
const gravatar=require("gravatar")

const { User } = require("../../models");
const { HttpError } = require("../../util");
const { schemaRegister } = require("../../schemas");
const { salt } = require("../../constants");

const signUp = async ({ body }, res) => {
  const { error } = schemaRegister.validate(body);
  if (error) throw new HttpError(400, error.message);

  let { email, password } = body;

  const user = await User.findOne({ email });
  if (user) throw new HttpError(409, "Email in use");
  password = await bcrypt.hash(password, salt);

const avatarURL=gravatar.url(email)
  const {subscription} = await User.create({ ...body, password,avatarURL });
  res.json({email,subscription}).status(201);
};

module.exports = signUp;
