module.exports.config = {
  name: "mp3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "đổi từ video thành âm thanh",
  cooldowns: 5
};

module.exports.run = async function() {}

module.exports.handleEvent = async function ({ api, event, threads }) {
  const { threadID, type, messageReply, messageID } = event;
  const axios = require("axios");
  const fs = require("fs");

  if (type !== "message_reply" || messageReply.attachments.length == 0) return;
  
  const audio = messageReply.attachments[0].url;
  var audioss = [];

  async function getAttachments() {
    const { data } = await axios.get(audio, { responseType: 'arraybuffer' });
    fs.writeFileSync(__dirname + "/cache/vdtoau.m4a", Buffer.from(data, 'utf-8'));
    audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a"));
    fs.unlinkSync(__dirname + "/cache/vdtoau.m4a");
  }

  const { body } = event;

  if (body.toLowerCase() == "mp3") {
    await getAttachments();
    api.sendMessage({ body: "Đã chuyển đổi video thành âm thanh", attachment: audioss }, threadID, messageID);
  }
}