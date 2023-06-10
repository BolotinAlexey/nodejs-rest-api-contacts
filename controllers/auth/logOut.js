const { User } = require("../../models");

const logOut = async ({ body: { id } }, res) => {
  User.findByIdAndUpdate(id, { token: null });
};

module.exports = logOut;
