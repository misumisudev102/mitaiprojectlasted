
const fse = require("fs-extra");

module.exports.config = {
    name: "loadData",
    eventType: ["log:subscribe"],
    version: "1.1.1",
    credits: "ductai",
    description: "load data"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    const { threadID, logMessageData } = event;
    const { PREFIX } = global.config;
    const { getCurrentUserID: botID, sendMessage: send, unsendMessage: unsend } = api;
    const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
    let threadInfo = await api.getThreadInfo(event.threadID);
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
    let qtv = threadInfo.adminIDs.length
    let threadName = threadInfo.threadName;
    var listad_msg = '';
    var adminIDs = threadInfo.adminIDs;
    for (let get of adminIDs) {
        const infoUsers = await Users.getInfo(get.id);
        listad_msg += `• ${infoUsers.name},\n`
    };

    if (logMessageData.addedParticipants.find(el => el.userFbId == botID())) {
        return api.sendMessage({
            body: "𝐓𝐢𝐞̂́𝐧 𝐡𝐚̀𝐧𝐡 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐝𝐚𝐭𝐚"
        }, event.threadID, (error, info) => {
            setTimeout(function() {
                unsend(info.messageID);
                    send(`
𝐋𝐨𝐚𝐝 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐝𝐚𝐭𝐚 𝐜𝐡𝐨 𝐧𝐡𝐨́𝐦

𝐓𝐞̂𝐧 𝐧𝐡𝐨́𝐦: ${threadname},
𝐔𝐈𝐃 𝐧𝐡𝐨́𝐦: ${event.threadID},
𝐓𝐨̂̉𝐧𝐠 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧: ${threadMem},
𝐓𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐚𝐦: ${nam},
𝐓𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐮̛̃: ${nu},
𝐓𝐨̂̉𝐧𝐠 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧: ${qtv},
𝐃𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐧𝐡𝐨́𝐦:
${listad_msg}`, event.threadID)
            }, 5000);
        });
    } else {
      console.log('Lỗi load data')
        return;
    }
}