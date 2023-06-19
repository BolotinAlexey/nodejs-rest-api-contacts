const { User } = require("../../models");
const { HttpError } = require("../../util");

const verifyEmail = async (req, res) => {
    const { verifycationToken } = req.params;
    const user = User.find({ verifycationToken })
    if (!user) throw new HttpError(404, "User not found")
    User.findByIdAndUpdate(user.id, { ...user, verify: true, verifycationToken: "" })
    res.json("Verification successful")
    
}

module.exports = verifyEmail;