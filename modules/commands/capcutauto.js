module.exports.config = {
    name: "capcut",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "dtai",
    description: "Thông Tin Mẫu Capcut",
    commandCategory: "Tiện ích",
    usages: "+link mẫu capcut",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
    console.log('Bắt đầu tải video capcut!');
};

module.exports.handleEvent = async function({ api, event, Users }) {
    const { body, senderID, threadID, messageID } = event;
    const axios = require("axios");

    const regex = /(https:\/\/www.capcut.com\/t\/[a-zA-Z0-9_-]+)|(https:\/\/www.capcut.com\/template-detail\/[a-zA-Z0-9_-]+)/g;
    const links = body.match(regex);

    if (!links || senderID == api.getCurrentUserID() || senderID == '') return api.sendMessage("Tiến hành down");

    for (const link of links) {
        var res = await axios.get(`http://localhost:5500/capcut?url=${link}`);
        const tieude = res.data.title;
        const description = res.data.description;
        const usage = res.data.usage;
        const video = res.data.video;

        await api.sendMessage({
            body: `📸==== [ 𝗖𝗔𝗣𝗖𝗨𝗧 ] ====📸
━━━━━━━━━━━━━━━━
📝 𝗧𝗶𝘁𝗹𝗲: ${tieude}
😻 𝗠𝗼̂ 𝘁𝗮̉: ${description}
🌸 𝗟𝘂̛𝗛̃𝗵 𝗱𝘂̀𝗻𝗴: ${usage}
🧸 𝗟𝗶𝗻𝗸 𝗰𝗮𝗽𝗰𝘂𝘁: ${link}
👉 𝗕𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗲𝗱𝗶𝘁 𝘃𝗶𝗱𝗲𝗼 𝘁𝗵𝗶̀ 𝗮̂́𝗻 𝘃𝗼̂ 𝗹𝗶𝗻𝗸 𝗰𝗮𝗽𝗰𝘂𝘁 𝗼̛̉ 𝘁𝗿𝗲̂𝗻 đ𝗲̂̉ 𝗲𝗱𝗶𝘁 𝗻𝗵𝗮`,
            attachment: (await axios.get(video, { responseType: "stream" })).data
        }, event.threadID, event.messageID);
    }
};
