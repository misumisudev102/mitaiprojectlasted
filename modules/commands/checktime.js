const os = require('os');
const fs = require('fs').promises;
const si = require('systeminformation');

module.exports.config = {
  name: "tinhtrang",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ductai",
  description: "upt",
  commandCategory: "Tiện ích",
  usages: "[nopre]",
  cooldowns: 0
};
module.exports.run = async function() {}

module.exports.handleEvent = async function ({ api, event, threads }) {
  const axios = require("axios")
  const { threadID, type, messageReply, messageID } = event;
  const moment = require("moment-timezone"); 
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu =
  moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
  const dateNow = Date.now();
  const time = process.uptime(),
        gio1 = Math.floor(time / (60 * 60)),
        phut = Math.floor((time % (60 * 60)) / 60),
        giay = Math.floor(time % 60);
async function getSystemInfo() {
  try {
    const info = {
      os: os.type(),
      arch: os.arch(),
      cpu: os.cpus().length,
      cpuSpeed: os.cpus()[0].speed,
      diskSpace: await getDiskSpace(),
    };
    return info;
  } catch (error) {
      api.sendMessage('Lỗi khi lấy thông tin hệ thống:', error.message);
    throw error;
  }
}

async function getDiskSpace() {
  try {
    const stats = await fs.stat('/');
    return {
      free: stats.size - stats.used,
      used: stats.used,
    };
  } catch (error) {
      api.sendMessage('Lỗi khi lấy thông tin dung lượng bộ nhớ:', error.message);
    throw error;
  }
}

(async () => {
  try {
    const info = await getSystemInfo();
    const osInfo = await si.osInfo();
    const cpuInfo = await si.cpu();
    const memInfo = await si.mem();

    var ifmb = `
𖢨 • Thời gian hiện tại: ${gio}
𖢨 • Thời gian bot đã online: ${gio1} : ${phut} : ${giay}
-------------------------------------
𖢨 • Thông tin hệ thống:
   - Hệ điều hành môi trường: ${info.os},
   - Kiểu Arch: ${info.arch},
   - CPU: ${info.cpu} core(s) - ${info.cpuSpeed}MHz,
   - Hệ điều hành: ${osInfo.distro},
   - Kiểu CPU: ${cpuInfo.manufacturer} ${cpuInfo.brand},
------------------------------------
𖢨 • Thông tin bộ nhớ
   - Dung lượng bộ nhớ đã dùng: ${Math.round((memInfo.total - memInfo.available) / (1024 ** 3))} GB,
   - Dung lượng bộ nhớ còn lại: ${Math.round(memInfo.available / (1024 ** 3))} GB,
   - Dung lượng bộ nhớ gốc: ${Math.round(memInfo.total / (1024 ** 3))} GB
------------------------------------
𖢨 • Phiên bản môi trường
Phiên bản Node: ${process.version},
Phiên bản hệ điều hành: ${osInfo.release}
    ` ;
    const { body } = event;
      if (body.toLowerCase() == "Upt" ||
          (body.toLowerCase() == "upt")) {
       api.sendMessage(ifmb, event.threadID, event.messageID);
    };
  } catch (error) {
      api.sendMessage('Đã xảy ra lỗi:', error.message);
  }
})();
}