module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "đtai",
  description: "cmm beo",
  commandCategory: "Sex",
  usages: "",
  cooldowns: 5,
  depndencies: {
    "axios": ""
  }
};

module.exports.run = async function ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) {
  const axios = require('axios');
  const moment = require("moment-timezone");
  const apiUrl = "http://localhost:8300/haugai";
  const dtaicutevc = ["1", "2", "3", "4", "6", "9", "12", "15", "18", "21", "24", "27"];
  const array = [];

  const randomIndex = Math.floor(Math.random() * dtaicutevc.length);
  const nguyenductai = parseInt(dtaicutevc[randomIndex]);

  for (let i = 0; i < nguyenductai; i++) {
    const res = await axios.get(apiUrl);
    const data = res.data.data;
    const loadimg = (await axios.get(data, { responseType: 'stream' })).data;
    array.push(loadimg);
  }

  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu =
    moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  const dateNow = Date.now();
  const time = process.uptime(),
    anh = Math.floor(time / (60 * 60)),
    la = Math.floor((time % (60 * 60)) / 60),
    dtai = Math.floor(time % 60);

  const threadInfo = await api.getThreadInfo(event.threadID);
  var { threadID, messageID, body } = event;
  var name = await Users.getNameUser(event.senderID);
  var tai = event.senderID;

  api.sendMessage({
    body: `Xin chào! Tôi là bot, dự án robot miễn phí của ALY Corporation. Bạn cần giúp gì?\n\nTime run - ${anh} : ${la} : ${dtai}`, attachment: array
  }, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name,
      messageID: info.messageID,
      author: event.senderID,
    })
  }, event.messageID);
}
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users }) => {
  const axios = require('axios');
  const request = require("request");
  const fs = require("fs-extra");
  const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  async function streamURL(url, mime = 'jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
      downloader = require('image-downloader'),
      fse = require('fs-extra');
    await downloader.image({
      url, dest
    });
    setTimeout(j => fse.unlinkSync(j), 60 * 1000, dest);
    return fse.createReadStream(dest);
  };

  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
  let sex = threadInfo.approvalMode;
  var pd = sex == false ? 'Tắt' : sex == true ? 'Bật' : '\n';
  let color = threadInfo.color;
  let icon = threadInfo.emoji;
  let threadMem = threadInfo.participantIDs.length;
  if (event.userID != handleReaction.author) return;
  if (event.reaction != "👍") return;
  api.sendMessage({
    body: `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${id}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadMem}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${threadInfo.messageCount}\n🎀 𝟭: 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n📑 𝟮: 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n📝𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘅𝗲𝗺 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡 𝗻𝗵𝗼́𝗺 𝘃𝗮̀ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 `,
    attachment: await streamURL(threadInfo.imageSrc)
  }, event.threadID, (err, info) => {

    global.client.handleReply.push({
      type: "choosee",
      name: this.config.name,
      author: event.senderID,
      messageID: info.messageID
    })
  })
}
module.exports.handleReply = async function ({
  args,
  event,
  Users,
  api,
  handleReply,
  Currencies,
  permssion,
  getText,
  __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
  api.sendMessage(`vui lòng chờ 1 xíu`, event.threadID, (err, info) =>
    setTimeout(() => { api.unsendMessage(info.messageID) }, 100000));
  const request = require("request");
  const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;


  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "":
        case "":
        case "1": {
          const axios = require('axios');
          const request = require("request");
          const fs = require("fs-extra");
          const name = (await Users.getData(idAdmin)).name

          api.sendMessage(`𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧:\n${name}`, event.threadID, event.messageID)
        }

        case "2": {
          const axios = require('axios');
          const request = require("request");
          const fs = require("fs-extra");
          var listad_msg = '';
          var adminIDs = threadInfo.adminIDs;
          for (let get of adminIDs) {
            const infoUsers = await Users.getInfo(get.id);
            listad_msg += `• ${infoUsers.name}\n`
          }
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({ body: `𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡\n${qtv}`, attachment }, event.threadID, event.messageID)
        }
          break;
        default:
          const choose = parseInt(event.body);
          if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
          if (choose > 2 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID);
      }
    }
  }
}
