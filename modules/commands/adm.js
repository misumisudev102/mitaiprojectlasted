module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Bật tắt chế độ chỉ qtv dùng lệnh",
	commandCategory: "Admin",
	usages: " bật tắt chế độ chỉ admin và qtv dùng lệnh",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
      "addedNewNDH": 'Đã thêm thành công %1 người dùng trở thành Người hỗ trợ\n\n%2',
        "listAdmin": `====〘『🤖𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓🤖』〙====\n\n%1\n\n\n==「⚙️𝗡𝗚𝗨̛𝗢̛̀𝗜 𝗛𝗢̂̃ 𝗧𝗥𝗢̛̣ 𝗕𝗢𝗧⚙️」==\n\n%2`,
        "notHavePermssion": 'Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": 'Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
        "removedAdmin": 'Đã gỡ bỏ %1 người điều hành bot:\n\n%2',
  "removedNDH": '𝗠𝗢𝗗𝗘 - Đã gỡ thành công vai trò Người hỗ trợ %1 người dùng trở lại làm thành viên\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'bot', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async  ({ api, event, args, Users, permssion, getText }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    const content = args.slice(1, args.length);
 axios.get('https://apiumaru.khoahoang3.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
let callback = function () {
    if (args.length == 0)
      api.sendMessage({body:`====『 𝙰𝚍𝚖𝚒𝚗 』====\n𝚊𝚍𝚖𝚒𝚗 𝚊𝚍𝚍  ➣ 𝚃𝚑𝚎̂𝚖 𝙽𝚐𝚞̛𝚘̛̀𝚒 𝙺𝚑𝚊́𝚌 𝙻𝚎̂𝚗 𝙰𝚍𝚖𝚒𝚗\n𝚊𝚍𝚖𝚒𝚗 𝚛𝚖  ➣ 𝚇𝚘𝚊́ 𝙱𝚘̉ 𝙰𝚍𝚖𝚒𝚗 𝙽𝚐𝚞̛𝚘̛̀𝚒 𝙺𝚑𝚊́𝚌\n𝚊𝚍𝚖𝚒𝚗 𝚘𝚗𝚕𝚢 ➣ [ 𝚘𝚗 / 𝚘𝚏𝚏 ] 𝙲𝚑𝚒̉ 𝙰𝚍𝚖𝚒𝚗 𝚂𝚞̛̉ 𝙳𝚞̣𝚗𝚐 𝙱𝚘𝚝\n𝚊𝚍𝚖𝚒𝚗 𝚌𝚑𝚊𝚝 ➣ [ 𝚘𝚗 / 𝚘𝚏𝚏 ] 𝙲𝚑𝚒̉ 𝙰𝚍𝚖𝚒𝚗 𝙼𝚘̛́𝚒 𝙲𝚑𝚊𝚝 𝚁𝚒𝚎̂𝚗𝚐 𝚅𝚘̛́𝚒 𝙱𝚘𝚝\n====『 𝙱𝚘𝚡 』====\n𝚊𝚍𝚖𝚒𝚗 𝚕𝚒𝚜𝚝   ➣ 𝚇𝚎𝚖 𝙳𝚊𝚗𝚑 𝚂𝚊́𝚌𝚑 𝙰𝚍𝚖𝚒𝚗 𝙱𝚘𝚝\n𝚊𝚍𝚖𝚒𝚗 𝚋𝚘𝚡𝚘𝚗𝚕𝚢   ➣ [ 𝚘𝚗 / 𝚘𝚏𝚏 ] 𝙲𝚑𝚒̉ 𝚀𝚝𝚟 - 𝙰𝚍𝚖𝚒𝚗 𝙼𝚘̛́𝚒 𝚂𝚞̛̉ 𝙳𝚞̣𝚗𝚐 𝙱𝚘𝚝\n====『 𝙽𝚘𝚝𝚎 』====n\nHDSD: ${global.config.PREFIX} 𝙰𝚍𝚖𝚒𝚗 [text]
`,
						attachment: fs.createReadStream(__dirname + `/cache/admin.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/admin.${ext}`), event.messageID);
				};
				 request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/admin.${ext}`)).on("close", callback);
			})
 
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list":
        case "all":
        case "-a": { 
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`→  👤𝐓𝐞̂𝐧 𝐚𝐝𝐦𝐢𝐧:${name}\n→ ⚙️𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧👤: facebook.com/${idAdmin} `);
                }
            }
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`→  ⚙️𝗧𝗲̂𝗻 𝗮𝗱𝗺𝗶𝗻 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣ 𝗯𝗼𝘁🤖:   ${name1}\n→ ⚙️𝗟𝗶𝗻𝗸 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗮𝗱𝗺𝗶𝗻 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣ 𝗯𝗼𝘁⚙🤖: facebook.com/${idNDH}\n\n📞𝗗𝘂̀𝗻𝗴 𝗯𝗼𝘁 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗶𝗯 𝗮𝗱𝗺𝗶𝗻 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗱𝘂𝘆𝗲̣̂𝘁 𝗵𝗼𝗮̣̆𝗰 𝗱𝘂̀𝗻𝗴 𝗿𝗲𝗾𝘂𝗲𝘀𝘁 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗱𝘂𝘆𝗲̣̂𝘁 𝗯𝗼𝘅🤖`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n\n"), msg1.join("\n\n")), threadID, messageID);
        }

       
        case "add": { 
            if (event.senderID != global.config.ADMC[0]) return api.sendMessage(`Xin lỗi! lệnh này chỉ admin mới dùng được`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `『𝐀𝐃𝐌𝐈𝐍』→ ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (event.senderID != global.config.ADMC[0]) return api.sendMessage(`Xin lỗi! lệnh này chỉ admin mới dùng được`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] ❯ ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'boxonly': {
        if (permssion < 1) return api.sendMessage("Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'bot', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("Tắt thành công chế độ Quản trị viên, tất cả thành viên có thể sử dụng Bot", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("Kích hoạt thành công chế độ Quản trị viên, chỉ Quản trị viên có thể sử dụng Bot", threadID, messageID);
    }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
        }
        case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            if (config.adminOnly == false) {
            config.adminOnly = true;
                api.sendMessage(`Bật thành công chỉ admin mới dùng được bot`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`Tắt thành công chỉ admin mới dùng được bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
          case 'chat':
        case '-ca': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("Xin lỗi! lệnh này chỉ admin mới dùng được", threadID, messageID);
               if (config.adminPaseOnly == false) {
                config.adminPaseOnly = true;
                api.sendMessage(" Bật thành công chỉ admin mới chat riêng được với bot 🔒", threadID, messageID);
            } else {
                config.adminPaseOnly = false;
                api.sendMessage(" Tắt thành công chỉ admin mới chat riêng được với bot 🔓 ", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        case 'ndhonly':
        case '-ndh': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("Xin lỗi! lệnh này chỉ Admin mới dùng được", threadID, messageID);
            if (config.ndhOnly == false) {
                config.ndhOnly = true;
                api.sendMessage(`Bật thành công chỉ NDH mới dùng được bot`, threadID, messageID);
            } else {
                config.ndhOnly = false;
                api.sendMessage(`Tắt thành công chỉ NDH mới dùng được bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
        }
        case "addndh": { 
          if (event.senderID != global.config.ADMC[0]) return api.sendMessage(`Cần quyền Admin chính để thực hiện lệnh`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "addndh"), threadID, messageID);
          if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];
                for (const id of mention) {
                    NDH.push(id);
                    config.NDH.push(id);
                    listAdd.push(`${id} - ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                NDH.push(content[0]);
                config.NDH.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewNDH", 1, `Người Hỗ Trợ → ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
  }
        case "removendh":{
          if (event.senderID != global.config.ADMC[0]) return api.sendMessage(`Cần quyền Admin để thực hiện`, event.threadID, event.messageID)
            if (permssion != 3) return api.sendMessage(getText("notHavePermssion", "removendh"), threadID, messageID);
                    if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.NDH.findIndex(item => item == id);
                    NDH.splice(index, 1);
                    config.NDH.splice(index, 1);
                    listAdd.push(`${id} -${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.NDH.findIndex(item => item.toString() == content[0]);
                NDH.splice(index, 1);
                config.NDH.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedNDH", 1, `${content[0]} - ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
                      }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}