const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti3",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "ZGToan Official",
    description: "",
    commandCategory: "Group",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];
const moment = require('moment-timezone');
 const gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s"); 
const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const { threadID, messageID, senderID, body } = event;

    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `=== [ sᴇɴᴅɴᴏᴛɪ ]  ===\n--------------------\nᴛɪᴍᴇ: ${gio}\n--------------------\n𝙏𝙪̛̀: ${name}\n--------------------\n𝘽𝙊𝙓: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂:${body}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `=== [ sᴇɴᴅɴᴏᴛɪ ]  ===\n------------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n--------------------\n𝙏𝙪̛̀: ${name}\n--------------------\n𝘽𝙊𝙓: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂:${body}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `=== 𝓹𝓱𝓪̉𝓷 𝓱𝓸̂̀𝓲===\n------------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n--------------------\n𝙁𝙧𝙤𝙢 ${name} 𝙒𝙞𝙩𝙝 𝙇𝙤𝙫𝙚!\n--------------------\n𝙉𝙊̣̂𝙄 𝘿𝙐𝙉𝙂: ${body}\n--------------------\n𝙧𝙚𝙥𝙡𝙮 𝙩𝙞𝙣 𝙣𝙝𝙖̆́𝙣 𝙣𝙖̀𝙮 𝙙𝙚̂̉ 𝙗𝙖́𝙤 𝙫𝙚̂̀ 𝙖𝙙𝙢𝙞𝙣`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `=== 𝓹𝓱𝓪̉𝓷 𝓱𝓸̂̀𝓲 ===\n-------------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n--------------------\n ${body}\n--------------------\n𝙁𝙧𝙤𝙢 ${name} 𝙒𝙞𝙩𝙝 𝙇𝙤𝙫𝙚!\n--------------------\n𝙧𝙚𝙥𝙡𝙮 𝙩𝙞𝙣 𝙣𝙝𝙖̆́𝙣 𝙣𝙖̀𝙮 𝙙𝙚̂̉ 𝙗𝙖́𝙤 𝙫𝙚̂̀ 𝙖𝙙𝙢𝙞𝙣`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `=== [ 𝓣𝓱𝓸̂𝓷𝓰 𝓑𝓪́𝓸 ] ===\n--------------------\n『𝓣𝓲𝓶』: ${gio}\n--------------------\n『𝓷𝓸̣̂𝓲 𝓭𝓾𝓷𝓰 』: ${args.join(" ")}\n--------------------\n『𝓷𝓰𝓾̛𝓸̛̀𝓲 𝓰𝓾̛̉𝓲』${await Users.getNameUser(senderID)} \n--------------------\n𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 => 𝒈𝒖̛̉𝒊 𝒗𝒆̂̀ 𝒂𝒅𝒎𝒊𝒏`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `===𝓣𝓱𝓸̂𝓷𝓰 𝓑𝓪́𝓸===\n------------------\n 『𝓣𝓲𝓶』: ${gio}\n--------------------\n『𝓷𝓸̣̂𝓲 𝓭𝓾𝓷𝓰 』: ${args.join(" ")}\n\n『𝓷𝓰𝓾̛𝓸̛̀𝓲 𝓰𝓾̛̉𝓲 』${await Users.getNameUser(senderID)}\n--------------------\n𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 => 𝒈𝒖̛̉𝒊 𝒗𝒆̂̀ 𝒂𝒅𝒎𝒊𝒏`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`[ 𝗧𝗛𝗔́𝗡𝗛 𝗖𝗛𝗜̉ ] → Gửi thánh chỉ thành công,`, threadID);
}