const { User } = require("../../models");
const { HttpError } = require("../../util");

const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params;
    console.log(verificationToken);
    const user = await User.findOne({ verificationToken })
    if (!user) throw new HttpError(404, "User not found")
     await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: "" })
    res.json({message:"Verification successful"})
    
}

module.exports = verifyEmail;