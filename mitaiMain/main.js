const fs = require("fs");
const { spawn } = require("child_process");
const chalk = require("chalk");
const path = require("path")

function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += sub.length == 1 ? "0" + sub : sub;
    }
    return "#" + color;
}

const filePath = "../../autostart.js";
let isFirstRun = true;

function servertime() {
    const child = spawn("node", ["../../autostart.js"], {
        cwd: __dirname,
        stdio: "inherit",
    });
}

console.log(chalk.bold.hex(randomColor()).bold("[ SERVER - START ] » ") + chalk.bold.hex(randomColor()).bold("Đã bật thành công autostart"));

setTimeout(() => {

    servertime();

    setInterval(() => {
        fs.readFile(filePath, (err) => {
            if (!err) {
                servertime();
            }
        });
    }, 120 * 60 * 1000);
}, 120 * 60 * 1000);