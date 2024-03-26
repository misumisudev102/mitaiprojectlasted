module.exports.config = {
    name: "antiout",
    version: "1.0.0",
    credits: "DungUwU",
    hasPermssion: 1,
    description: "Bật tắt antiout",
    usages: "antiout on/off",
    commandCategory: "Quản Trị Viên",
    cooldowns: 0
};
module.exports.run = async({ api, event, Threads, Users}) => {
    const axios = require('axios');
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
    else data["antiout"] = false;
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);

    return api.sendMessage(`${(data["antiout"] == true) ? "bật" : "tắt"} thành công chức năng chống thành viên out chùa`,event.threadID);
}