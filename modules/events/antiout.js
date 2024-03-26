 module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "0.0.1",
    credits: "dtai",
    description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
const axios = require("axios");
  const fs = require("fs-extra");
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!data.antiout) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
  var dtai = moment.tz("Asia/Ho_Chi_Minh").format("HH 𝐠𝐢𝐨̛̀,mm 𝐩𝐡𝐮́𝐭,ss 𝐠𝐢𝐚̂𝐲");
  var tai = moment.tz("Asia/Ho_Chi_Minh").format("𝐍𝐠𝐚̀𝐲:D,𝐓𝐡𝐚́𝐧𝐠:MM,𝐍𝐚̆𝐦:YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
var nameBox = global.data.threadInfo.get(event.threadID).threadName || "❌𝐓𝐞̂𝐧 𝐛𝐨𝐱 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐨̂̀𝐧 𝐭𝐚̣𝐢";
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đuổi";
    if (type == "tự rời") {
        api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
            if (error) {
                api.sendMessage(`[ 𝐂𝐇𝐎̂́𝐍𝐆 𝐓𝐇𝐀̀𝐍𝐇 𝐕𝐈𝐄̂𝐍 𝐑𝐎̛̀𝐈 𝐍𝐇𝐎́𝐌 ]\n[⏰] 𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀: ${gio} \n[⏱] 𝐓𝐚̣𝐢: ${dtai} \n[📆] 𝐍𝐠𝐚̀𝐲: ${tai} \n[🗓] 𝐓𝐡𝐮̛́: ${thu} \n[📇] 𝐓𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧: ${name}\n[👥] 𝐎̛̉ 𝐛𝐨𝐱: ${nameBox} 𝐝𝐚̃ 𝐭𝐮̛̣ 𝐲́ 𝐫𝐨̛̀𝐢 𝐧𝐡𝐨́𝐦 𝐤𝐡𝐢 𝐜𝐡𝐮̛𝐚 𝐱𝐢𝐧 𝐩𝐡𝐞́𝐩 𝐐𝐮𝐚̉𝐧 𝐓𝐫𝐢̣ 𝐕𝐢𝐞̂𝐧 𝐯𝐚̀ 𝐛𝐨𝐭 𝐯𝐚̂̃𝐧 𝐛𝐚̣̂𝐭 𝐚𝐧𝐭𝐢𝐨𝐮𝐭 𝐧𝐞̂𝐧 𝐬𝐞̃ 𝐭𝐮̛̣ 𝐝𝐨̣̂𝐧𝐠 𝐭𝐡𝐞̂𝐦 𝐥𝐚̣𝐢 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦\n[⚠️] 𝐝𝐞̂̉ 𝐨𝐮𝐭 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐛𝐚̉𝐨 𝐐𝐮𝐚̉𝐧 𝐓𝐫𝐢̣ 𝐕𝐢𝐞̂𝐧 𝐭𝐚̆́𝐭 𝐚𝐧𝐭𝐢𝐨𝐮𝐭 𝐡𝐨𝐚̣̆𝐜 𝐛𝐢̣ 𝐤𝐢𝐜𝐤`,event.threadID)
    }else api.sendMessage(`[ 𝐂𝐇𝐎̂́𝐍𝐆 𝐓𝐇𝐀̀𝐍𝐇 𝐕𝐈𝐄̂𝐍 𝐑𝐎̛̀𝐈 𝐍𝐇𝐎́𝐌 ]\n[❗️] 𝐓𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n[⚠️] 𝐝𝐚̃ 𝐤𝐢́𝐜𝐡 𝐡𝐨𝐚̣𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐨̂́𝐧𝐠 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐫𝐨̛̀𝐢 𝐧𝐡𝐨́𝐦\n[👤] 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧: ${name}\n[👥] 𝐧𝐡𝐨́𝐦: ${nameBox}\n====[ 𝐁𝐀̂𝐘 𝐆𝐈𝐎̛̀ 𝐋𝐀̀ ]====\n[⏰] 𝐭𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${dtai}\n[📆] 𝐧𝐠𝐚̀𝐲: ${tai}\n[🗓] 𝐭𝐡𝐮̛́: ${thu}`,event.threadID);
        })
    }
}
