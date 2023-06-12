const { User } = require("../../models");

const logOut = async ({ body: { id } }, res) => {
  await User.findByIdAndUpdate(id, { token: null });
  res.json().status(204);
};

module.exports = logOut;
