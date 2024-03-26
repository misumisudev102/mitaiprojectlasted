const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "ADMIN",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage({body:`[🐧] - 𝗗𝗮̃ 𝗯𝗮̣̂𝘁 𝗰𝗵𝗲̂́ 𝗱𝗼̣̂ 𝘁𝘂̛̣ 𝗱𝗼̣̂𝗻𝗴 𝘀𝗲𝗲𝗻 𝗸𝗵𝗶 𝗰𝗼́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗼̛́𝗶`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/girl?apikey=JRTfree_1827425146')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage({body:`[🐔] - 𝗗𝗮̃ 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ 𝗱𝗼̣̂ 𝘁𝘂̛̣ 𝗱𝗼̣̂𝗻𝗴 𝘀𝗲𝗲𝗻 𝗸𝗵𝗶 𝗰𝗼́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗼̛́𝗶`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/nsfw/ig?apikey=JRTfree_1827425146')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,event.messageID);
	}
	else {
	  api.sendMessage('Sai cú pháp', event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};