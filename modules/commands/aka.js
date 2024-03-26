module.exports.config = {
	name: "Aka",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Dtai",
	description: "Thêm Aka cho gr",
	commandCategory: "tiện ích",
	usages: "[add/remove/all] [content/ID]",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "cache", "aka.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = ({ event, api, args, permssion }) => {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "cache", "aka.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, listRule: [] };

    switch (args[0]) {
        case "add": {
            if (permssion == 0) return api.sendMessage("[AKA]-Bạn không đủ quyền hạn để thêm Aka nhóm!", threadID, messageID);
            if (content.length == 0) return api.sendMessage("[AKA]-Phần nhập Aka không được để trống,vui lòng nhập Aka nhóm!", threadID, messageID);
            if (content.indexOf("\n") != -1) {
                const contentSplit = content.split("\n");
                for (const item of contentSplit) thisThread.listRule.push(item);
            }
            else {
                thisThread.listRule.push(content);
            }
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage('[AKA]-Thành công,đã thêm Aka nhóm!', threadID, messageID);
            break;
        }
        case "list":
        case"all": {
            var msg = "", index = 0;
          for (const item of thisThread.listRule) msg += `${index+=1}• ${item}\n`;
            if (msg.length == 0) return api.sendMessage("[AKA]-Nhóm của bạn chưa cho có Aka nhóm!", threadID, messageID);
            api.sendMessage(`${msg}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "delete": {
            if (!isNaN(content) && content > 0) {
                if (permssion == 0) return api.sendMessage("[AKA]-Bạn không đủ quyền hạn để xoá Aka nhóm vui lòng nhờ Quản Trị Viên Hoặc Admin Bot!", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[AKA]-Nhóm của bạn chưa có Aka để xoá!", threadID, messageID);
                thisThread.listRule.splice(content - 1, 1);
                api.sendMessage(`[AKA] Đã xoá thành công Aka ${content}`, threadID, messageID);
                break;
            }
            else if (content == "all") {
                if (permssion == 0) return api.sendMessage("[AKA] Bạn không đủ quyền hạn để có thể sử dụng xóa luật!", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[AKA]-Bạn không đủ quyền hạn để xoá Aka nhóm vui lòng nhờ Quản Trị Viên Hoặc Admin Bot!", threadID, messageID);
                thisThread.listRule = [];
                api.sendMessage(`[AKA]-Nhóm của bạn chưa có Aka để xoá!`, threadID, messageID);
                break;
            }
        }
        default: {
            if (thisThread.listRule.length != 0) {
                var msg = "", index = 0;
                for (const item of thisThread.listRule) msg += `${index+=1}• ${item}\n`;
                return api.sendMessage(`${msg}`, threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }

    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}