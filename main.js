const { spawn } = require("child_process");
const path = require("path");
const chalk = require("chalk");
  const moment = require('moment-timezone');

const logMitai = console.log;

function randomColor() {
  let color = "";
  for (let i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += (sub.length == 1 ? "0" + sub : sub);
  }
  return "#" + color;
};

function runCode1() {
  function mitai_main() {
    const child = spawn("node", ["./mitai.js"], {
      cwd: __dirname,
      stdio: "inherit"
    });
  }

  mitai_main();
}

function runCode2() {
  let getmitailog = ""
  getmitailog = getLog = chalk.bold.hex(randomColor()).bold("[ MITAI - REST ] » ") + chalk.bold.hex("#8B8878").bold('Tiến hành vào trạng thái nghỉ ngơi');
  
  logMitai(getmitailog);

function displayCurrentTime() {
  const vietnamTime = moment().tz('Asia/Ho_Chi_Minh');
  const currentTime = vietnamTime.format('HH:mm:ss');
  const currentDate = vietnamTime.format('DD/MM/YYYY');
  
  logMitai(chalk.bold.hex(randomColor()).bold(`Bây giờ là: ${currentTime}`), chalk.bold.hex(randomColor()).bold(`||`),  chalk.bold.hex(randomColor()).bold(`${currentDate}.`));
}
displayCurrentTime();
setInterval(displayCurrentTime, 3600000);

}

function runCode() {
  const currentHour = new Date().getHours();
  const vietnamTimezone = 7;

  if (
    (currentHour >= 6 && currentHour < 24) ||
    (currentHour >= 0 && currentHour < 6)
  ) {
    runCode1();
  } else {
    runCode2();
  }
}

runCode();