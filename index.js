const chalkAnimation = require('chalkercli');

const readline = require('readline');
const ProgressBar = require('progress');

const str = '[ SERVER-LOADING ] » Đang tiến hành khởi động hệ thống, vui lòng chờ một chút.';
const rainbow = chalkAnimation.rainbow(str);
const progressBar = new ProgressBar('[:bar]', { total: 5 });

const columns = process.stdout.columns;
progressBar.width = columns - 0;

let progress = 5;
const intervalId = setInterval(() => {

  const ratio = progress / 10;
  rainbow.replace(`${str}.`);

  progressBar.update(ratio);

  if (progress === 10) {
    clearInterval(intervalId);

    runCustomCode();
  }

  progress++;
}, 300);

function runCustomCode() {
const chalk2 = require('chalk');
const chalk = require('chalkercli');
const axios = require('axios');
const fs = require('fs');
const { exec } = require('child_process');
const { spawn } = require('child_process');
const appStateFilePath = 'appstate.json';
const gradient = require('gradient-string');

const loginFilePath = 'login.js';

axios.get("https://raw.githubusercontent.com/nguyenductai206/nguyenductai206/main/package.json").then((res) => {
    console.log(chalk2.bgRed.white.bold( "『 NAME 』» ", res['data']['name']));
    console.log(chalk2.bgGreen.white.bold( "『 VERSION 』» ", res['data']['version']));
    console.log(chalk2.bgBlue.white.bold( "『 DESCRIPTION 』» ", res['data']['description']));
    console.log(chalk2.bgGreen.white.bold( "『 LOAD DATA 』» ", res['data']['data-mitai']));
  console.log(chalk2.bgRed.white.bold( "『 DATA 』» ", res['data']['data-mitai-project']));
      var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100"];
    var random = 
job[Math.floor(Math.random() * job.length)]
    var random2 = 
job[Math.floor(Math.random() * job.length)]
const logo = `
██████╗ ██╗   ██╗ █████╗     ████████╗ █████╗ ██╗ 
██╔══██╗██║   ██║██╔══██     ╚══██╔══╝██╔══██╗██║
██║  ██║██║   ██║██║  ╚═╝       ██║   ███████║██║
██║  ██║██║   ██║██║  ██╗       ██║   ██╔══██║██║
██████╔╝╚██████╔╝╚█████╔╝       ██║   ██║  ██║██║
╚═════╝  ╚═════╝  ╚════╝        ╚═╝   ╚═╝  ╚═╝╚═╝`;

function getRandomColors() {
  const colors1 = ["FFFFFF","FFEBCD","F5F5DC","F0FFF0","F5FFFA","F0FFFF","F0F8FF","FFF5EE","F5F5F5","FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100"];

  const colors = colors1.filter(color => {
    if (color === "FF0000") {
      return "FF9900";
    } else {
      const hue = parseInt(color.substring(0, 2), 16);
      const saturation = parseInt(color.substring(2, 4), 16);
      const lightness = parseInt(color.substring(4, 6), 16);

      if (hue >= 10 && hue <= 30 && saturation >= 80 && lightness >= 70) {
        return false;
      } else {
        return true;
      }
    }
  });

  const randomColors = [];

  while (randomColors.length < 2) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    if (!randomColors.includes(randomColor)) {
      randomColors.push(randomColor);
    }
  }

  return randomColors;
}

const randomColors = getRandomColors();
const coloredData = gradient(...randomColors).multiline(logo);

const logoLines = logo.split('\n');
const maxLength = Math.max(...logoLines.map(line => line.length));
const horizontalPadding = ' '.repeat(Math.floor((process.stdout.columns - maxLength) / 2));

console.log(chalk2(coloredData.split('\n').map(line => horizontalPadding + line).join('\n')));
  const packageJson = require('./package.json');
if (packageJson.dependencies) {
  const dependencies = Object.keys(packageJson.dependencies);
  console.log(chalk2.bold.hex("#" + random)('[ LOADER-PACKAGE ] » ') + chalk2.bold.hex("#" + random2)(`Load thành công ${dependencies.length} package`))
    console.log(chalk2.bold.hex("#" + random)(`[ LIST-PACKAGE] » `) + chalk2.bold.hex("#" + random2)(`Tổng package hiện có: ${dependencies.length}`))

} else {
  console.log(chalk2.bold.hex("#" + random)('[ ERROR-PACKAGE ] » ') + chalk2.bold.hex("#" + random2)('Không thể load được package.'));
}
});

fs.readFile(appStateFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Lỗi đọc tệp ${appStateFilePath}: ${err}`);
    return;
  }

  try {
    JSON.parse(data);
    //chạy index 
const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const path = require("path");
const logger = require("./utils/log");
const chalk1 = require("chalk");
const chalk = require("chalkercli");
const geoip = require("geoip-lite");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const useragent = require("express-useragent");
const requestIp = require("request-ip");
const api = require("./scr_api/routes/api");
const os = require("os");

    var mautim = ["#FF33FF"];
var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100"];
    var random = 
job[Math.floor(Math.random() * job.length)]
    var random2 = 
job[Math.floor(Math.random() * job.length)]

    const cpuUsage = os.loadavg()[0] * 100 / os.cpus().length;
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const memoryUsage = (totalMemory - freeMemory) * 100 / totalMemory;

const diskUsage = fs.statSync('/').size;
const diskTotal = fs.statSync('/').blocks * fs.statSync('/').blksize;
const diskUsagePercentage = (diskUsage / diskTotal) * 100;
    
var mau = ["#0000FF","#00FF00","#00FFFF"];
var dtai = mau[Math.floor(Math.random() * mau.length)];
    const item = [
  {
    "thiết bị": "RAM",
    "dung lượng": `${(totalMemory / (1024 * 1024 * 1024)).toFixed(2)} MB`,
    "phần trăm": `${memoryUsage.toFixed(2)} %`
  },
  {
    "thiết bị": "CPU",
    "dung lượng": `${os.cpus().length} cores`,
    "phần trăm": `${cpuUsage.toFixed(2)} %`
  },
  {
    "thiết bị": "Disk",
    "dung lượng": `${(diskUsage / (1024 * 1024 * 1024)).toFixed(2)} GB`,
    "phần trăm": `${diskUsagePercentage.toFixed(2)} %`
  },
  {
    "thiết bị": "CPU Usage",
    "dung lượng": `${cpuUsage.toFixed(0)} MB`,
    "phần trăm": `${cpuUsage.toFixed(2)} %`
  },
  {
  "thiết bị": "Memory Usage",
  "dung lượng": `${memoryUsage.toFixed(0)} MB`,
  "phần trăm": `${memoryUsage.toFixed(2)} %`
  },
];

function startBot(message) {
    (message) ? logger(message, "[ Bắt đầu ]") : "";

    const child = spawn("node", ["mitai"], {
  cwd: __dirname ,
  stdio: "inherit",
  shell: true
});

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Tiến hành khởi động lại...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("Đã xảy ra lỗi: " + JSON.stringify(error), "[ Bắt đầu ]");
    });
};
    setTimeout(() => {
console.table(item);
    }, 3000)
startBot();
        //end index //
  } catch (error) {
    console.error(`[ ERROR ] -> ${appStateFilePath} đã bị lỗi!\nLỗi là: ${error}\n[ GET APPSTATE ] -> Hệ thống đang tiến hành lấy ${appStateFilePath} mới!\n`);

    function startLogin() {
      const child = spawn("node", ["login.js"], {
  cwd: __dirname ,
  stdio: "inherit",
  shell: true
});

      child.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
    }

    startLogin();
  }
});
}