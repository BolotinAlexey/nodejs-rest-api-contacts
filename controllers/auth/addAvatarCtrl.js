const fs = require("fs/promises")
const Jimp = require("jimp");
const path=require("path");
const { User } = require("../../models");

const addAvatarCtrl = async ({ file, user }, res) => {
     console.log(user);
    const { path: tempPath, filename } = file;
    const newPath = path.resolve("public/avatars");
    const avatarURL = path.join(newPath, filename);
    Jimp.read(tempPath).then(img => img.resize(250, 250).write(avatarURL)).catch(err=>{throw err}).finally(()=> {fs.unlink(tempPath)})
   
     await User.findByIdAndUpdate(user.id, { avatarURL });
    res.json(avatarURL)
}

module.exports=addAvatarCtrl