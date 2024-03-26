module.exports.config = {
  name: "atok",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài", // tài cuti vãi lồn địt mẹ mày dùng lệnh bố m thích thay cre ko bố m đã bố thí cho dùng rồi bớt bớt lại nha con chó
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.startsWith("tiktok") || event.body.startsWith("Tiktok")) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];

    var link = "http://localhost:5500/vdgai";

    const callback = async () => {
      await api.sendMessage({
        body: "\n",
        attachment: fs.createReadStream(__dirname + "/cache/1.mp4"),
      }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);
    };

    return request(encodeURI(link)).pipe(fs.createWriteStream(__dirname + "/cache/1.mp4")).on("close", async () => {
      await callback();
    });
  }
};

module.exports.run = async ({ api, event, args, Users, Threads, Currencies }) => {

};
