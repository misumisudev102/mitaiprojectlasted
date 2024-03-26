const os = require('os');
const moment = require('moment-timezone');
const fs = require('fs').promises;
const { exec } = require('child_process');

module.exports.config = {
  name: "uptime",
  version: "2.0.0",
  hasPermission: 0,
  credits: "Vtuan dtai fix mod",
  description: "Hiển thị thông tin hệ thống của bot",
  commandCategory: "Hệ Thống",
  usages: "",
  cooldowns: 5
};

async function getDependencyCount() {
  try {
    const packageJsonString = await fs.readFile('package.json', 'utf8');
    const packageJson = JSON.parse(packageJsonString);
    const depCount = Object.keys(packageJson.dependencies || {}).length;
    const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
    return { depCount, devDepCount };
  } catch (error) {
    console.error('Không thể đọc file package.json:', error);
    return { depCount: -1, devDepCount: -1 };
  }
}

async function checkpack() {
  try {
    const npmListCommand = 'npm list --depth=0 --json=true';
    const { stdout } = await exec(npmListCommand);
    const npmPackages = JSON.parse(stdout);
    const livePackages = Object.keys(npmPackages.dependencies || {});
    const deadPackages = Object.keys(npmPackages._requiredBy || {});
    return { livePackages, deadPackages };
  } catch (error) {
    console.error('Lỗi khi kiểm tra các gói npm:', error);
    return { livePackages: [], deadPackages: [] };
  }
}

function getStatusByPing(ping) {
  if (ping < 0) {
    return 'Không xác định';
  } else if (ping < 50) {
    return 'Rất tốt';
  } else if (ping < 100) {
    return 'Tốt';
  } else if (ping < 200) {
    return 'Chấp nhận được';
  } else if (ping < 500) {
    return 'Độ trễ cao';
  } else {
    return 'Độ trễ rất cao';
  }
}

function getPrimaryIP() {
  const interfaces = os.networkInterfaces();
  for (let iface of Object.values(interfaces)) {
    for (let alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return '127.0.0.1';
}

module.exports.run = async ({ api, event, Threads, Users }) => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const uptime = process.uptime();

  const { depCount, devDepCount } = await getDependencyCount();
  let name = await Users.getNameUser(event.senderID);
  const primaryIp = getPrimaryIP();
  const botStatus = getStatusByPing(Date.now() - event.timestamp);

  const { livePackages, deadPackages } = await checkpack();

  const nguyen = Math.floor(uptime / (60 * 60));
  const duc = Math.floor((uptime % (60 * 60)) / 60);
  const tai = Math.floor(uptime % 60);

  const uptimeString = `${nguyen.toString().padStart(2, '0')}: ${duc.toString().padStart(2, '0')}: ${tai.toString().padStart(2, '0')}`;
  const dtai = `
    Hiện giờ là: ${moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss')} || ${moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY')}
    Bot đã online được: ${uptimeString}
    Địa chỉ IP: ${primaryIp}
    Tổng số package sống: ${depCount}
    Tống số package chết: ${devDepCount}
    Tổng số package npm sống: ${livePackages.length}
    Tổng số package npm chết: ${deadPackages.length > 0 ? deadPackages.length : '0'}
    Danh sách package chết: ${deadPackages.length > 0 ? deadPackages.join(', ') : 'Không có'}
    Tình trạng bot: ${botStatus}
    Ping: ${Date.now() - event.timestamp}ms
    Yêu cầu bởi: ${name}
  `.trim();

  api.sendMessage(dtai, event.threadID, event.messageID);
};

