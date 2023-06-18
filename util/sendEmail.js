const sgMail = require("@sendgrid/mail");
require("dotenv").config()
const {MAIL_FROM} = require("../constants")


const sendMail = async (data) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({ ...data, from: MAIL_FROM })
    return true
}

module.exports = sendMail;