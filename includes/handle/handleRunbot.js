module.exports = async function ({ api }) {
    const moment = require("moment");
    const botID = api.getCurrentUserID();

    try {
        const time = moment().format("YYYY-MM-DD HH:mm:ss");
        const body = "Replace this with your message body";
        const link = "Replace this with your link";
        const count = "Replace this with your count";  // Assuming count is a variable you have

        const msg = "Tiến hành chạy"

        await api.sendMessage(msg, global.config.ADMC[0]);
    } catch (e) {
        console.log(`Đã xảy ra lỗi khi gửi thông báo: ${e}`);
    }
};
