module.exports.config = {
  name: "vdtrai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event }) => {
  if (event.body.startsWith("Vdtrai") || event.body.startsWith("Vdtrai")) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];

    try {
      const link = "http://localhost:8300/vdtrai";
      const response = await axios.get(link, { responseType: 'stream' });
      response.data.pipe(fs.createWriteStream(__dirname + "/cache/1.mp4"));

      response.data.on("end", async () => {
        await api.sendMessage({
          body: "\n",
          attachment: fs.createReadStream(__dirname + "/cache/1.mp4"),
        }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);
      });
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  }
};

module.exports.run = async ({ api, event, args, Users, Threads, Currencies }) => {

};
