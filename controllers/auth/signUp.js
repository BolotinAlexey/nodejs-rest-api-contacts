const bcrypt = require("bcryptjs");
const gravatar=require("gravatar")
const { nanoid } = require("nanoid")
require("dotenv").config();

const { BASE_URL } = process.env;
const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../util");
const { schemaRegister } = require("../../schemas");
const { salt } = require("../../constants");

const signUp = async ({ body }, res) => {
  const { error } = schemaRegister.validate(body);
  if (error) throw new HttpError(400, error.message);

  let { email, password } = body;

  const user = await User.findOne({ email });
  if (user) throw new HttpError(409, "Email in use");
  password = await bcrypt.hash(password, salt);

  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const { subscription } = await User.create({ ...body, password, avatarURL, verificationToken });
  const html = `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`;
  
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html
  }
  await sendEmail(verifyEmail);
  res.json({email,subscription}).status(201);
};

module.exports = signUp;
