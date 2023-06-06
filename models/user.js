const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../middlewares");
const { emailRegexp, minlengthPassword } = require("../constants");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for signup"],
    },
    email: {
      type: String,
      requred: [true, "Set email for signup"],
      unique: true,
      match: emailRegexp,
    },
    password: {
      type: String,
      required: [true, "Set password for signup"],
      minlength: minlengthPassword,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);
const User = model("user", userSchema);

module.exports = User;
