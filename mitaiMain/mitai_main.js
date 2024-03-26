const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { spawn } = require('child_process');
const moment = require("moment-timezone");
const axios = require("axios");
const chalk = require("chalk");

function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
};

global.client = new Object({
    getTime: function(option) {
        switch (option) {
            case 'seconds':
                return `${moment.tz('Asia/Ho_Chi_minh').format('ss')}`
            case 'minutes':
                return `${moment.tz('Asia/Ho_Chi_minh').format('mm')}`
            case 'hours':
                return `${moment.tz('Asia/Ho_Chi_minh').format('HH')}`
            case 'date':
                return `${moment.tz('Asia/Ho_Chi_minh').format('DD')}`
            case 'month':
                return `${moment.tz('Asia/Ho_Chi_minh').format('MM')}`
            case 'year':
                return `${moment.tz('Asia/Ho_Chi_minh').format('YYYY')}`
            case 'fullHour':
                return `${moment.tz('Asia/Ho_Chi_minh').format('HH:mm:ss')}`
            case 'fullYear':
                return `${moment.tz('Asia/Ho_Chi_minh').format('DD/MM/YYYY')}`
            case 'fullTime':
                return `${moment.tz('Asia/Ho_Chi_minh').format('HH:mm:ss DD/MM/YYYY')}`
        }
    },
})
console.log(chalk.bold.hex(randomColor()).bold("[ SERVER - TIME ] » ") + chalk.bold.hex(randomColor()).bold("Kết nối thành công đến server time thế giới"));

function servertime() {
    const child = spawn("node", ["./main.js"], {
        cwd: __dirname,
        stdio: "inherit",
    });

}
servertime()