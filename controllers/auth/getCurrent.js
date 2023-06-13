const getCurrent = ({ user:{ email, subscription } }, res) => {
  res.json({ email, subscription });
};

module.exports = getCurrent;
