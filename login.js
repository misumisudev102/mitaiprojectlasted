const { spawn } = require('child_process');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');
const path = require("path");
const chalk = require('chalk');
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    } 
   return "#" + color;
};
const api = require("./nodemodules/node_modules/getappstate/get/extra");
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use("/", api);
app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});
(async () => {
  app.listen(process.env.PORT || 80);
})();
console.log(chalk.bold.hex(randomColor()).bold(`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
console.log(chalk.bold.hex(randomColor()).bold(`┣➤ [ LOGIN - MITAI ] » Đang tiến hành đăng nhập...`));
setTimeout(() => {
  console.log(chalk.bold.hex(randomColor()).bold(`┣➤ [ LOGIN - MITAI ] » Tiến hành đăng nhập tại:`));
  const appstateFilePath = path.join(__dirname, 'appstate.json');

fs.readFile('acc.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const credentials = JSON.parse(data);
  const mail = credentials.mail;
  const password = credentials.pass;
  console.log(chalk.bold.hex(randomColor()).bold(`┣➤ [ LOGIN - MITAI ] » Email:`, mail));
  console.log(chalk.bold.hex(randomColor()).bold(`┣➤ [ LOGIN - MITAI ] » Password:`, password));

    const apiURL = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/getappstate?username=${mail}&password=${password}`;

    axios.get(apiURL)
      .then(response => {
        const responseData = response.data;
        const chatbot = response.data.data
        const getapps = chatbot ? "Đã lấy appstate thành công!" : "Không thể lấy appstate vui lòng xem lại toàn khoản!"
        console.log(chalk.bold.hex(randomColor()).bold(`┣➤ [ LOGIN - MITAI ] »`,getapps));
        fs.writeFile(appstateFilePath, JSON.stringify(responseData.data), 'utf8', (err) => {
          if (err) {
            console.error(chalk.bold.hex(randomColor()).bold('[ LOGIN - MITAI ] » Đã xảy ra lỗi khi ghi file appstate.json:', err));
            return;
          }
          console.log(chalk.bold.hex(randomColor()).bold(`┣➤ [ LOGIN - MITAI ] » Đã ghi thành công appstate vào file appstate.json`));
          console.log(chalk.bold.hex(randomColor()).bold(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
        });
        console.log(chalk.bold.hex(randomColor()).bold(`┣➤ [ LOGIN - MITAI ] » Chế độ:`, response.data.status));
        console.log(chalk.bold.hex(randomColor()).bold(`┣➤ [ LOGIN - MITAI ] » Tình trạng:`, response.data.message));
      })
      .catch(error => {
        console.error(chalk.bold.hex(randomColor()).bold('[ LOGIN - MITAI ] » Đã xảy ra lỗi vui lòng xem tại tài khoản hoặc xem lại api\nLỗi là:', error));
      });
  });
}, 2000);