
/*module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "JRT",
    description: "Làm cho console đẹp hơn",
    commandCategory: "Hệ thống admin-bot",
    usages: "console ",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Ảnh, video hoặc kí tự đặc biệt";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "7900FF", "93FFD8", "CFFFDC", "FF5B00", "3B44F6", "A6D1E6", "7F5283", "A66CFF", "F05454", "FCF8E8", "94B49F", "47B5FF", "B8FFF9", "42C2FF", "FF7396"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
  var random4 = job[Math.floor(Math.random() * job.length)]
  var random5 = job[Math.floor(Math.random() * job.length)]
  var random6 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.bold.hex("#" + random4)(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`) + `\n` +chalk.bold.hex("#" + random)(`| ➜ Tên nhóm: ${nameBox}`) + `\n` + chalk.bold.hex("#" + random5)(`| ➜ ID nhóm: ${event.threadID}`) + `\n` + chalk.bold.hex("#" + random6)(`| ➜ Tên người dùng: ${nameUser}`) + `\n` + chalk.bold.hex("#" + random1)(`| ➜ ID người dùng: ${event.senderID}`) + `\n` + chalk.bold.hex("#" + random2)(`| ➜ Nội dung: ${msg}`) + `\n` + chalk.bold.hex("#" + random3)(`| ➜ Thời gian: ${time}`) + `\n` + chalk.bold.hex("#" + random4)(`━━━━━━━━━━━⭐ 𝗝𝗥𝗧 𝗕𝗢𝗧 ⭐━━━━━━━━━━━`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {  
}*/

module.exports.config = {
    name: "console",
    version: "1.0.2",
    hasPermssion: 3,
    credits: "JRT",
    description: "Làm console đẹp hơn",
    commandCategory: "Hệ thống admin-bot",
    usages: "console",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
  const axios = require('axios');
 const fs = require("fs-extra");
    const chalk = require('chalk');
     const moment = require("moment-timezone");
  //const res = await axios.get(`https://sumiproject.space/facebook/timejoine?uid=${event.senderID}`);
  //const finduid = res.data.uid
  //const finddate = res.data.day
  //const findtime = res.data.time
  //const findname = res.data.name
var tracy = moment.tz("Asia/Ho_Chi_Minh").format("HH:MM:SS");
var jrt = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  if (!event.body) return;
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "❌ không xác định tên";
  var jrtxtracy = event.senderID;
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"❗ảnh hoặc video or kí tự đéo gì đó chịu :v";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "7900FF", "93FFD8", "CFFFDC", "FF5B00", "3B44F6", "A6D1E6", "7F5283", "A66CFF", "F05454", "FCF8E8", "94B49F", "47B5FF", "B8FFF9", "42C2FF", "FF7396"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
  var random4 = job[Math.floor(Math.random() * job.length)]
  var random5 = job[Math.floor(Math.random() * job.length)]
  var random6 = job[Math.floor(Math.random() * job.length)]
  var random7 = job[Math.floor(Math.random() * job.length)]
  var random8 = job[Math.floor(Math.random() * job.length)]
  var random9 = job[Math.floor(Math.random() * job.length)]
  var random10 = job[Math.floor(Math.random() * job.length)]
  var random11 = job[Math.floor(Math.random() * job.length)]
    //console.log(chalk.bold.hex("#" + random)(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`) + `\n` + chalk.bold.hex("#" + random1)(`| ➜ 👥𝗡𝗵𝗼́𝗺: 「${nameBox}」`) + `\n` + chalk.bold.hex("#" + random2)(`| ➜ ⚒️ID nhóm: ${event.threadID}`) + `\n` + chalk.bold.hex("#" + random3)(`| ➜ 📇𝗧𝗲̂𝗻 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴: 「 ${nameUser} 」`) + `\n` + chalk.bold.hex("#" + random4)(`| ➜ 💾𝗟𝗶𝗻𝗸 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: 𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/${jrtxtracy}`) + `\n` + chalk.bold.hex("#" + random4)(`| ➜ ⏳𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${finddate}`) + `\n` + chalk.bold.hex("#" + random4)(`| ➜ 📋𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘁𝗮̣𝗼 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${findtime}`) + `\n` + chalk.bold.hex("#" + random5)(`| ➜ 🔎ID người dùng: ${jrtxtracy}`)+ `\n` + chalk.bold.hex("#" + random7)(`| ➜ 📑𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴: 「 ${msg} 」`) + `\n` + chalk.bold.hex("#" + random8)(`| ➜ ⏰𝗩𝗮̀𝗼 𝗟𝘂́𝗰: ${tracy}`) + `\n` + chalk.bold.hex("#" + random9)(`| ➜ 🗓𝗧𝗵𝘂̛́: ${thu}`) + `\n` + chalk.bold.hex("#" + random10)(`| ➜ 📆${jrt}`) + `\n` + chalk.bold.hex("#" + random11)(`━━━━━━━━━━━⭐ 𝗝𝗥𝗧 𝗕𝗢𝗧 ⭐━━━━━━━━━━━`)); 
  console.log(chalk.bold.hex("#" + random)(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`) + `\n` + chalk.bold.hex("#" + random1)(`| ➜ Nhóm: 「${nameBox}」`) + `\n` + chalk.bold.hex("#" + random2)(`| ➜ ID nhóm: ${event.threadID}`) + `\n` + chalk.bold.hex("#" + random3)(`| ➜ Name User: 「 ${nameUser} 」`) + `\n` + chalk.bold.hex("#" + random4)(`| ➜ Link Contact (Facebook): https://fb.com/${jrtxtracy}`) + `\n` + chalk.bold.hex("#" + random5)(`| ➜ ID người dùng: ${jrtxtracy}`)+ `\n` + chalk.bold.hex("#" + random7)(`| ➜ Note: 「 ${msg} 」`) + `\n` + chalk.bold.hex("#" + random8)(`| ➜ Time Send: ${tracy}`) + `\n` + chalk.bold.hex("#" + random9)(`| ➜ Thứ: ${thu}`) + `\n` + chalk.bold.hex("#" + random10)(`| ➜ 📆${jrt}`) + `\n` + chalk.bold.hex("#" + random11)(`━━━━━━━━━━━━━━━━━━━━━━`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
               }