module.exports.config = {
  name: "b",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "ProCoderCyrus",//Mod by H.Thanh
  description: "Các cài đặt của nhóm",
  commandCategory: "Box",
  usages: "< id/name/setnamebox/emoji/me setqtv/setqtv/image/info/new/taobinhchon/setname/setnameall/rdcolor >",
  cooldowns: 1,
  dependencies: {
    "request": "",
    "fs-extra": "path"
  }
};
module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "boxthanh.jpg")) request("https://i.imgur.com/ysqryj6.jpg").pipe(fs.createWriteStream(dirMaterial + "boxthanh.jpg"));
}

const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");

module.exports.handleEvent = async ({
  api,
  event,
  args
}) => {
  if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
  let totalChat = JSON.parse(fs.readFileSync(totalPath));
  if (!totalChat[event.threadID]) return;
  if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
    let sl = (await api.getThreadInfo(event.threadID)).messageCount;
    totalChat[event.threadID] = {
      time: Date.now() - _24hours,
      count: sl,
      ytd: sl - totalChat[event.threadID].count
    }
    fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
  }
}

module.exports.run = async ({
  api,
  event,
  args,
  Threads,
  Users,
  utils
}) => {
  var fullTime = global.client.getTime("fullTime");
  const request = require("request");
  const {
    resolve
  } = require("path");
  const moment = require("moment-timezone");
  var timeNow = moment.emtz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  if (args.length == 0) return api.sendMessage({ body: `===『 𝗕𝗢𝗫 𝗖𝗢𝗡𝗙𝗜𝗚 』===\n━━━━━━━━━━━━━━━━━━\n[🌟] 𝗯𝗼𝘅 𝗶𝗱 => 𝗟𝗮̂́𝘆 𝗜𝗗 𝗻𝗵𝗼́𝗺\n[🎁] 𝗯𝗼𝘅 𝗻𝗮𝗺𝗲 => 𝗟𝗮̂́𝘆 𝘁𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n[🐥] 𝗯𝗼𝘅 𝘀𝗲𝘁𝗻𝗮𝗺𝗲𝗯𝗼𝘅 < 𝘁𝗲̂𝗻 > => Đ𝗼̂̉𝗶 𝘁𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n[💞] 𝗯𝗼𝘅 𝗶𝗻𝗳𝗼 => 𝗫𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗼́𝗺\n[💌] 𝗯𝗼𝘅 𝗺𝗲 𝘀𝗲𝘁𝗾𝘁𝘃 => 𝗕𝗼𝘁 𝘀𝗲̃ 𝘁𝗵𝗲̂𝗺 𝗯𝗮̣𝗻 𝗹𝗮̀𝗺 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n[🔰] 𝗯𝗼𝘅 𝘀𝗲𝘁𝗾𝘁𝘃 < 𝘁𝗮𝗴 > => 𝗧𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̀𝗺 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n[😻] 𝗯𝗼𝘅 𝗲𝗺𝗼𝗷𝗶 < 𝗶𝗰𝗼𝗻 > => Đ𝗼̂̉𝗶 𝗯𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗵𝗼́𝗺\n──────────────────\n[🌹] 𝗯𝗼𝘅 𝗶𝗺𝗮𝗴𝗲 < 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝗮̉𝗻𝗵 > => Đ𝗼̂̉𝗶 𝗮̉𝗻𝗵 𝗯𝗶̀𝗮 𝗻𝗵𝗼́𝗺\n[👥] 𝗯𝗼𝘅 𝗻𝗲𝘄 < 𝘁𝗮𝗴 > => 𝗧𝗮̣𝗼 𝗻𝗵𝗼́𝗺 𝗺𝗼̛́𝗶 𝘃𝗼̛́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗮𝗴\n[🎀] 𝗯𝗼𝘅 𝘁𝗮𝗼𝗯𝗶𝗻𝗵𝗰𝗵𝗼𝗻 => 𝗧𝗮̣𝗼 𝗯𝗶̀𝗻𝗵 𝗰𝗵𝗼̣𝗻 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n──────────────────\n[⚜️] 𝗯𝗼𝘅 𝘀𝗲𝘁𝗻𝗮𝗺𝗲 < 𝘁𝗮𝗴/𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 > < 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 > => Đ𝗮̣̆𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n[🎶] 𝗯𝗼𝘅 𝘀𝗲𝘁𝗻𝗮𝗺𝗲𝗮𝗹𝗹 < 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 > => Đ𝗮̣̆𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 đ𝗼̂̀𝗻𝗴 𝗯𝗼̣̂ 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n[🎊] 𝗯𝗼𝘅 𝗿𝗱𝗰𝗼𝗹𝗼𝗿 => 𝗧𝗵𝗶𝗲̂́𝘁 𝗹𝗮̣̂𝗽 𝗰𝗵𝘂̉ đ𝗲̂̀ 𝗻𝗵𝗼́𝗺 𝗻𝗴𝗮̂̃𝘂 𝗻𝗵𝗶𝗲̂𝗻\n──────────────────\n[ ${timeNow} ]`, attachment: fs.createReadStream(__dirname + `/noprefix/boxthanh.jpg`) }, event.threadID, event.messageID);
  var id = [event.senderID] || [];
  var main = event.body;
  var groupTitle = main.slice(main.indexOf("|") + 2)
  if (args[0] == "new") {
    for (var i = 0; i < Object.keys(event.mentions).length; i++)
      id.push(Object.keys(event.mentions)[i]);
    api.createNewGroup(id, groupTitle, () => {
      api.sendMessage(`Đã tạo nhóm ${groupTitle}`, event.threadID)
    })
  }

  if (args[0] == "id") {
    return api.sendMessage(`${event.threadID}`, event.threadID, event.messageID);
  }

  if (args[0] == "name") {
    var nameThread = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
    return api.sendMessage(nameThread, event.threadID, event.messageID);
  }

  if (args[0] == "setnamebox") {
    var content = args.join(" ");
    var c = content.slice(7, 99) || event.messageReply.body;
    api.setTitle(`${c} `, event.threadID);
  }

  if (args[0] == "emoji") {
    const name = args[1] || event.messageReply.body;
    api.changeThreadEmoji(name, event.threadID)

  }

  if (args[0] == "me") {
    if (args[1] == "setqtv") {
      const threadInfo = await api.getThreadInfo(event.threadID)
      const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
      if (!find) api.sendMessage("Cần quyền Quản trị viên nhóm cho Bot để thực hiện lệnh", event.threadID, event.messageID)
      else if (!global.config.SUPERADMIN.includes(event.senderID)) api.sendMessage("Cần quyền SUPER ADMIN để thực hiện lệnh", event.threadID, event.messageID)
      else api.changeAdminStatus(event.threadID, event.senderID, true);
    }
  }

  if (args[0] == "setqtv") {
    if (args.join().indexOf('@') !== -1) {
      namee = Object.keys(event.mentions)
    } else namee = args[1]
    if (event.messageReply) {
      namee = event.messageReply.senderID
    }

    const threadInfo = await api.getThreadInfo(event.threadID)
    const findd = threadInfo.adminIDs.find(el => el.id == namee);
    const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
    const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

    if (!finddd) return api.sendMessage("Bạn cần quyền Quản trị viên nhóm để thực hiện lệnh", event.threadID, event.messageID);
    if (!find) {
      api.sendMessage("Cần quyền Quản trị viên nhóm cho Bot để thực hiện lệnh", event.threadID, event.messageID)
    }
    if (!findd) {
      api.changeAdminStatus(event.threadID, namee, true);
    } else api.changeAdminStatus(event.threadID, namee, false)
  }

  if (args[0] == "image") {
    if (event.type !== "message_reply") return api.sendMessage("Bạn phải phản hồi một audio, video, ảnh nào đó", event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("Bạn phải phản hồi một audio, video, ảnh nào đó", event.threadID, event.messageID);
    if (event.messageReply.attachments.length > 1) return api.sendMessage(`Vui lòng phản hồi chỉ một audio, video, ảnh`, event.threadID, event.messageID);
    var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
  };

  if (args[0] == "info") {
    const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    let threadInfo = await api.getThreadInfo(event.threadID);
    let timeByMS = Date.now();
    const threadSetting = (await Threads.getData(String(event.threadID))).data ||
      {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX
      : global.config.PREFIX;
    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    var kxd = nope.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
    let color = threadInfo.color;
    let icon = threadInfo.emoji;

    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'Tắt' : sex == true ? 'Bật' : '\n';


    if (!totalChat[event.threadID]) {
      totalChat[event.threadID] = {
        time: timeByMS,
        count: sl,
        ytd: 0
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }

    let mdtt = "Chưa có thống kê";
    let preCount = totalChat[event.threadID].count || 0;
    let ytd = totalChat[event.threadID].ytd || 0;
    let hnay = (ytd != 0) ? (sl - preCount) : "Chưa có thống kê";
    let hqua = (ytd != 0) ? ytd : "Chưa có thống kê";
    if (timeByMS - totalChat[event.threadID].time > _24hours) {
      if (timeByMS - totalChat[event.threadID].time > (_24hours * 2)) {
        totalChat[event.threadID].count = sl;
        totalChat[event.threadID].time = timeByMS - _24hours;
        totalChat[event.threadID].ytd = sl - preCount;
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
      }
      getHour = Math.ceil((timeByMS - totalChat[event.threadID].time - _24hours) / 3600000);
      if (ytd == 0) mdtt = 100;
      else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
      mdtt += "%";
    }
    var listad_msg = '';
    var adminIDs = threadInfo.adminIDs;
    for (let get of adminIDs) {
      const infoUsers = await Users.getInfo(get.id);
      listad_msg += `• ${infoUsers.name}\n`
    }
    var callback = () =>
      api.sendMessage({
        body: `===「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 」===\n────────────\n🌟 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n🔰 𝗜𝗗: ${id}\n🧩 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴: ${icon ? icon : 'Không sử dụng'}\n🎁 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n🎊 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴: ${global.config.PREFIX}\n🥀 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗼́𝗺: ${prefix}\n────────────\n👥 𝗧𝗼̂̉𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻: ${threadMem}\n🧑 𝗡𝗮𝗺: ${nam}\n👧 𝗡𝘂̛̃ : ${nu}\n🚫 𝗞𝗵𝗼̂𝗻𝗴 𝘅𝗮́𝗰 đ𝗶̣𝗻𝗵: ${kxd}\n⚜️ 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n📚 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻:\n${listad_msg}────────────\n💬 𝗧𝗼̂̉𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${sl}\n💌 𝗠𝘂̛́𝗰 đ𝗼̣̂ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰: ${mdtt}\n📦 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗵𝗼̂𝗺 𝗾𝘂𝗮: ${hqua}\n🗃️𝗛𝗼̂𝗺 𝗻𝗮𝘆 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻 đ𝘂̛𝗼̛̣𝗰 : ${hnay}\n📔 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂: ${fullTime}\n🥤 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "💝" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗼𝘁 `,
        attachment: fs.createReadStream(__dirname + '/cache/1.png')
      }, event.threadID,
        // event.threadID,
        // () => fs.unlinkSync(__dirname + '/cache/1.png'),
        //event.messageID
        (err, info) => {
          global.client.handleReaction.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
          })
        }, event.messageID);
    //);
    return request(encodeURI(`${threadInfo.imageSrc}`))
      .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
      .on('close', () => callback());
  }
  if (args[0] == "taobinhchon") {
    const { threadID, messageID, senderID } = event;
    let options = args.splice(1).join(" ").split("|");
    let obj = {}
    for (let item of options) obj[item] = false;
    api.sendMessage(`Tạo thành công các bình chọn ${options.join(",")}\nHãy phản hồi tin nhắn này để tạo tiêu đề`, event.threadID, (err, info) => {
      if (err) return console.log(err);
      else {
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: senderID,
          obj
        })
      }
    });
  }
  if (args[0] == "setname") {
    if (event.type == "message_reply") {
      const name = args.splice(1).join(" ")
      return api.changeNickname(`${name}`, event.threadID, event.messageReply.senderID);
    }
    else {
      const name = args.splice(1).join(" ")
      const mention = Object.keys(event.mentions)[0];
      if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
      if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
    }
  }
  if (args[0] == "rdcolor") {
    var color = ['196241301102133', '169463077092846', '2442142322678320', '234137870477637', '980963458735625', '175615189761153', '2136751179887052', '2058653964378557', '2129984390566328', '174636906462322', '1928399724138152', '417639218648241', '930060997172551', '164535220883264', '370940413392601', '205488546921017', '809305022860427'];
    api.changeThreadColor(color[Math.floor(Math.random() * color.length)], event.threadID)
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  if (args[0] == "setnameall") {
    var threadInfo = await api.getThreadInfo(event.threadID)
    var idtv = threadInfo.participantIDs
    console.log(threadInfo)
    const name = args.splice(1).join(" ")
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    for (let setname of idtv) {
      await delay(3000)
      api.changeNickname(`${name}`, event.threadID, setname);
    }
  }
}
module.exports.handleReply = function ({ api, event, handleReply }) {
  const { threadID, senderID, body } = event;
  if (senderID != handleReply.author) return;
  return api.createPoll(body, event.threadID, handleReply.obj, (err, info) => {
    if (err) return console.log(err);
    else {
      api.sendMessage(`Bình chọn ${body} đã được tạo`, threadID);
      api.unsendMessage(handleReply.messageID);
      global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
    }
  });
}
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users }) => {
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
  if (event.userID != handleReaction.author) return;
  if (event.reaction != "💝") return;
  api.unsendMessage(handleReaction.messageID);
  var msg = `===== [ 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗕𝗢𝗧 ] =====\n\n💮 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 ${global.config.BOTNAME} đ𝗮̃ 𝗼𝗻𝗹 đ𝘂̛𝗼̛̣𝗰 ${h} 𝗚𝗶𝗼̛̀ ${p} 𝗣𝗵𝘂́𝘁 ${s} 𝗚𝗶𝗮̂𝘆\n⚙️ 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝘂̉𝗮 𝗯𝗼𝘁: ${global.config.version}\n🔗 𝗧𝗼̂̉𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${client.commands.size}\n🖨️ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́: ${client.events.size} 𝗹𝗲̣̂𝗻𝗵 𝘀𝘂̛̣ 𝗸𝗶𝗲̣̂𝗻\n👥 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n🏘️ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n💓 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘁: ${global.config.PREFIX}`
  //var msg =`==== [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] ====\n━━━━━━━━━━━━━━━━━━\n🐼 𝗖𝗮́𝗰 𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐼\n\n🌸 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́\n💞 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗰𝗵𝗲𝗰𝗸 𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻\n🌷 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸\n💕 ${global.config.PREFIX}𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅 \n💍 ${global.config.PREFIX}𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 \n🕊️ ${global.config.PREFIX}𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿\n☠️ ${global.config.PREFIX}𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰\n💝 ${global.config.PREFIX}𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺\n🎥 ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁\n🎼 ${global.config.PREFIX} 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀\n👤 ${global.config.PREFIX}𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻\n🔗 ${global.config.PREFIX}𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿\n🌹 ${global.config.PREFIX}𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻\n💞 ${global.config.PREFIX}𝗾𝗿: 𝗹𝗮̀𝗺 𝗾𝗿\n━━━━━━━━━━━━━━━━━━\n======『 𝗕𝗢𝗧 𝗗𝗧𝗔𝗜 𝗖𝗨𝗧𝗜 』======`
  return api.sendMessage({
    body: msg, attachment: (await axios.get((await axios.get(`https://api-hr.maiyeuhtt1.repl.co/images/robot`)).data.url, {
      responseType: 'stream'
    })).data
  }, event.threadID);
}