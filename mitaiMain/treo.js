const axios = require('axios');
const chalk = require('chalk');

const url = `https://16d8b138-a711-4739-a5c3-f6b6da076a1e-00-369vyq0j9u8jx.pike.replit.dev`;

function ductaiUptime(url) {
    axios.get(url)
        .then(response => {

        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setTimeout(() => {
                ductaiUptime(url);
            }, 15000);
        });
}

console.log(chalk.bold.hex("00FF00")(`[ SERVER - LOADING ] Khởi động thành công Server`));

ductaiUptime(url);