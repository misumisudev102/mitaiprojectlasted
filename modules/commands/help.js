module.exports.config = {
    name: "help",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Hướng dẫn cho người mới",
    commandCategory: "tiện ích",
    usages: "[Tên module]",
    cooldowns: 5,
    envConfig: {
        autoUnsend: true,
        delayUnsend: 60
    }
};

module.exports.run = function({ api, event, args }) {
    try {
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const command = commands.get((args[0] || "").toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

    if (args[0] == "all") {
        const command = commands.values();
        var group = [], msg = "";
        for (const commandConfig of command) {
            if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
            else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
        }
        group.forEach(commandGroup => msg += `『🧸』 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)}\n${commandGroup.cmds.join(', ')}\n\n`);
        return api.sendMessage(`=== 『𝐋𝐈𝐒𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃』 ===\n` + msg + `\n🗂𝐒𝐨̂́ 𝐥𝐞̣̂𝐧𝐡 𝐡𝐢𝐞̣̂𝐧 𝐜𝐨́:${commands.size}\n📃𝐇𝐃𝐒𝐃 𝐡𝐞𝐥𝐩 𝐬𝐨̂́ 𝐭𝐫𝐚𝐧𝐠 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐡𝐨𝐚̣̆𝐜 𝐡𝐞𝐥𝐩𝐚𝐥𝐥 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐥𝐞̣̂𝐧𝐡\n❌𝐍𝐠𝐡𝐢𝐞̂𝐦 𝐜𝐚̂́𝐦 𝐤𝐡𝐨̂𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐭𝐡𝐮𝐨̣̂𝐜 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓\n❗️𝐊𝐡𝐢 𝐛𝐚̣𝐧 𝐭𝐡𝐚̉ "😠" 𝐁𝐨𝐭 𝐬𝐞̃ 𝐭𝐮̛̣ 𝐭𝐡𝐮 𝐡𝐨̂̀𝐢`, threadID, async (error, info) =>{
            if (autoUnsend) {
                await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
                return api.unsendMessage(info.messageID);
            } else return;
        });
    }
if (!command) {
    const commandsPush = [];
    const page = parseInt(args[0]) || 1;
    const pageView = 20;
    let i = 0;
    let msg = "=== 『𝐋𝐈𝐒𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃』 ===\n";

    for (var [name, value] of (commands)) {
        name += `
『💓』:${value.config.description}
⏰𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡𝐨̛̀: ${command.config.cooldowns}s
🪪𝐐𝐮𝐲𝐞̂̀𝐧 𝐡𝐚̣𝐧: ${((command.config.hasPermssion == 0) ? `Người dùng` : (command.config.hasPermssion == 1) ? `Quản trị viên nhóm` : `ADMIN BOT`)}\n`;
        commandsPush.push(name);
    }

    commandsPush.sort((a, b) => a.data - b.data);

    const first = pageView * page - pageView;
    i = first;
    const helpView = commandsPush.slice(first, first + pageView);

    for (let cmds of helpView)
        msg += `『🧸』: ${cmds}\n`;
    const cmdsView = `
🗃𝐓𝐫𝐚𝐧𝐠: ${page}|${Math.ceil(commandsPush.length/pageView)}
🗂𝐓𝐨̂̉𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 𝐥𝐚̀ :${commandsPush.length}
📃𝐇𝐃𝐒𝐃 𝐡𝐞𝐥𝐩 𝐬𝐨̂́ 𝐭𝐫𝐚𝐧𝐠 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐡𝐨𝐚̣̆𝐜 𝐡𝐞𝐥𝐩𝐚𝐥𝐥 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐥𝐞̣̂𝐧𝐡`;
    return api.sendMessage(msg + cmdsView, threadID,
        async (error, info) => {
            if(error) return console.log(error)
            if (autoUnsend) {
                await new Promise(resolve =>
                    setTimeout(resolve, delayUnsend * 1000));
                return api.unsendMessage(info.messageID);
            } else return;
        });
}
return api.sendMessage(` 
💾𝐋𝐞̣̂𝐧𝐡: ${command.config.name}
\n📋𝐓𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐥𝐞̣̂𝐧𝐡: ${command.config.description}
\n📃𝐂𝐚́𝐜𝐡 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : "𝐂𝐡𝐮̛𝐚 𝐮𝐩𝐝𝐚𝐭𝐞 𝐡𝐨𝐚̣̆𝐜 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐡𝐮̛𝐨̛́𝐧𝐠 𝐝𝐚̂̃𝐧 𝐜𝐮̣ 𝐭𝐡𝐞̂̉ 𝐭𝐮̛̀ 𝐚𝐝𝐦𝐢𝐧"}
\n⏰𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡𝐨̛̀: ${command.config.cooldowns}
\n🪪𝐐𝐮𝐲𝐞̂̀𝐧 𝐡𝐚̣𝐧: ${((command.config.hasPermssion == 0) ? `Người dùng` : (command.config.hasPermssion == 1) ? `Quản trị viên nhóm` : `ADMIN BOT`)}`, threadID, messageID);
} catch(e) {
    console.log(e)
    }
};
