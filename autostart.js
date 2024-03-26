const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const nodemon = require('nodemon');
const chalk = require('chalk');
const moment = require('moment-timezone');

const on = false
const off = true

let autoRestartEnabled = off;
let timeout;

function randomColor() {
  var color = "";
  for (var i = 0; i < 256; i++) {
    var sub = Math.floor(Math.random() * 256).toString(16);
    color += (sub.length == 1 ? "0" + sub : sub);
  }
  return "#" + color;
};

const scriptPath = './main.js';

function checkFunctionality() {
  const monitoredPaths = [
    'modules',
    'scr_api',
    'utils'
  ];

  monitoredPaths.forEach((monitoredPath) => {
    const fullPath = path.join(__dirname, monitoredPath);

    if (!fs.existsSync(fullPath)) {
      console.error(`Thư mục ${monitoredPath} không tồn tại.`);
      restartProcess();
    } else {

      const files = fs.readdirSync(fullPath);

      if (files.length === 0) {
        console.error(`Thư mục ${monitoredPath} không có tệp tin.`);
        restartProcess();
      } else {
        files.forEach((file) => {
          const filePath = path.join(fullPath, file);

          if (!fs.existsSync(filePath)) {
            console.error(`Tập tin ${file} trong ${monitoredPath} không tồn tại.`);
            restartProcess();
          }
        });
      }
    }
  });

  console.log(chalk.bold.hex(randomColor()).bold('[ AUTO-START ] » Các chức năng ổn định'));
}

function startProcess() {
  const process = spawn('node', [scriptPath]);

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    if (autoRestartEnabled) {
      restartProcess();
    }
  });
}

function restartProcess() {
  nodemon.emit('restart');
}

function toggleAutoRestart() {
  autoRestartEnabled = !autoRestartEnabled;

  if (autoRestartEnabled) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      restartProcess();
    }, 120 * 60 * 1000);

    console.log(chalk.bold.hex(randomColor()).bold('[ AUTO-START ] » Chế độ tự động khởi động khi phát hiện thay đổi cấu trúc code đã bị tắt.')); 
    console.log(chalk.bold.hex(randomColor())('[ AUTO-START ] » '), chalk.bold.hex(randomColor())('Đã bật chế độ tự chạy lại đã được cài là sau: 2 tiếng.'));
  } else {
    clearTimeout(timeout);

    console.log(chalk.bold.hex(randomColor()).bold('[ AUTO-START ] » Chế độ tự động khởi động khi phát hiện thay đổi cấu trúc code đã được bật.'));
    console.log(chalk.bold.hex(randomColor())('[ AUTO-START ] » '), chalk.bold.hex(randomColor())('Đã tắt chế độ tự chạy lại đã được cài là sau: 2 tiếng.'));
  }
}

nodemon({
  script: scriptPath,
  ext: 'js',
}).on('start', () => {
  
  const fileRun = path.join(__dirname, './mitaiMain/data/dataRun.json');

if (fs.existsSync(fileRun)) {
  let data = JSON.parse(fs.readFileSync(fileRun));
  data.push({ time: getCurrentTime() });
  fs.writeFileSync(fileRun, JSON.stringify(data, null, '\t'));
} else {
  const data = [{ timeRun: getCurrentTime() }];
  fs.writeFileSync(fileRun, JSON.stringify(data, null, '\t'));
}

console.log(chalk.bold.hex(randomColor()).bold('[ DATA-RUNBOT ] »'), chalk.bold.hex(randomColor()).bold('Đã ghi thành công dữ liệu khởi chạy bot vào data'));

function getCurrentTime() {
  return moment().tz('Asia/Ho_Chi_Minh').format(`DD / MM / YYYY - 
HH : mm : ss`);
}
  
  console.log(chalk.bold.hex(randomColor()).bold('[ AUTO-START ] » mitai-project đang khởi động'));
  checkFunctionality();
}).on('restart', () => {
  console.log(chalk.bold.hex(randomColor()).bold('[ AUTO-START ] » Tiến hành khởi động lại mitai-project.'));
  checkFunctionality();
});

toggleAutoRestart();