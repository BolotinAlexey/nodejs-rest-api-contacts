const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const minlengthPassword = 5;

const subscribtion = ["starter", "pro", "business"];
const salt = 10;
const MAIL_FROM="oleksiibolotin@gmail.com"

module.exports = {
  emailRegexp,
  minlengthPassword,
  subscribtion,
  salt,MAIL_FROM
};
