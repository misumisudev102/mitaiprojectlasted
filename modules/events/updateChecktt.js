module.exports.config = {
    name: "updateChecktt",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "D-Jukie",
    description: "Xóa data tương tác người dùng khi out",
};

module.exports.run = async ({ event, api, Threads }) => { 
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const fs = require("fs");
    const pathA = require('path');
    const thread = require('../commands/-checktt');
    const path = pathA.resolve(__dirname, '../', 'commands', '-checktt');
    var threadData = thread.find(i => i.threadID == event.threadID)
    const index = threadData.data.findIndex(item => item.id == event.logMessageData.leftParticipantFbId);
    threadData.data.splice(index, 1);
    fs.writeFileSync(path, JSON.stringify(thread, null, 2), 'utf-8');
}