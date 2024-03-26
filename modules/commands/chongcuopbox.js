module.exports.config = {
 name: "chongcuopbox",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Ngăn chặn việc thay đổi quản trị viên nhóm",
 usages: "",
 commandCategory: "tiện ích",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('» 𝐂𝐚̂̀𝐧 𝐪𝐮𝐲𝐞̂̀𝐧 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐧𝐡𝐨́𝐦, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐞̂𝐦 𝐯𝐚̀ 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢 !', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`» ${(data["guard"] == true) ? "𝗕𝗮̣̂𝘁" : "𝗧𝗮̆́𝘁"} 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 𝗖𝗵𝗼̂́𝗻𝗴 𝗖𝘂̛𝗼̛́𝗽 𝗕𝗼𝘅 🔰`, event.threadID, event.messageID);
}