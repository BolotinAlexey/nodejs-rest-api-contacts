const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../util");
require("dotenv").config();

const { BASE_URL } = process.env;

const repeatSendEmail = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        throw new HttpError(400,"missing required field email")
    }
    const user =await User.findOne({ email })
    if (!user) {
        throw new HttpError(401)
    }
    if (user.verify) {
        throw new HttpError(400,"Verification has already been passed")
    }

    const html = `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`;
    
    await sendEmail({
        to:email,subject:"Repeat verify email",html
    })
    res.json({message:"Verification email sent"})
}

module.exports = repeatSendEmail;

