const getCurrent = ({ user }, res) => {
  const { gmail, subscription } = user;
  res.json({ gmail, subscription });
};

module.exports = getCurrent;
