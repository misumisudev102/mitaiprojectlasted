module.exports.config = {
  name: "prefix",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "Prefix",
    cooldowns: 5
};
module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
const moment = require("moment-timezone"); 
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
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
  var { threadID, messageID } = event;
  const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
  if (event.body.toLowerCase().indexOf("prefix") == 0) {
    //getPrefix
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
  const admins = global.config.ADMINBOT;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
  var i = 1;
  var msg = [];
  var msg = []
    for(var a of admins) {
    if (parseInt(a)) {
    var name = await Users.getNameUser(a);
      msg.push(`${i++}. ${name}`);
    }
    }
    api.sendMessage({body:`=====「 𝗣𝗥𝗘𝗙𝗜𝗫 」 =====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n→ 𝗧𝗲̂𝗻: ${global.config.BOTNAME}\n→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴: ${global.config.PREFIX} \n→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘅: ${prefix} \n→ 𝗕𝗼𝘁 𝗵𝗶𝗲̣̂𝗻 𝗱𝗮𝗻𝗴 𝗰𝗼́ ${commands.size} 𝗟𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n→ 𝗕𝗼𝘅: ${threadname}\n→ 𝗨𝗜𝗗 𝗯𝗼𝘅: ${event.threadID}\n→ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n→ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n→ 𝗣𝗶𝗻𝗴: ${Date.now() - dateNow} ms\n→ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀:\n${gio} ${thu}`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-v.vinh-05.repl.co/images/canh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
  }
};
module.exports.run = () => {};