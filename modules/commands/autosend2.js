module.exports.config = {
    name: 'autosend',
    version: '2.0.4',
    hasPermssion: 2,
    credits: 'đtai',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
module.exports.onLoad = o => {
  const axios = require('axios');
  const fs = require('fs-extra');
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
  global.autosendmessage_setinterval = setInterval(async function() {
    const m = require("moment-timezone").tz("Asia/Ho_Chi_Minh");
    const dtaicute = m.format("HH:mm:ss");
    const hour = m.format("HH");
    if ((dtaicute === `${hour}:00:00` || dtaicute === `${hour}:30:00`) && (hour >= "00" && hour <= "24")) {
      const time = process.uptime();
const apiUrl = "http://localhost:5500/girl";
const dtaicutevc = ["1", "2", "3", "4", "6", "9", "12"];
const array = [];

const randomIndex = Math.floor(Math.random() * dtaicutevc.length);
const nguyenductai = parseInt(dtaicutevc[randomIndex]);

for (let i = 0; i < nguyenductai; i++) {
  const res = await axios.get(apiUrl);
  const data = res.data.data;
  const loadimg = (await axios.get(data, { responseType: 'stream' })).data;
  array.push(loadimg);
}
      var msg = "\n";
      msg = {
        body: msg,
        attachment: array
      };
      global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
    }
  }, 1000);
};

module.exports.run = () => {};