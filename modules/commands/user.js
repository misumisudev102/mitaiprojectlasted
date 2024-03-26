module.exports.config = {
	name: "user",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Cấm hoặc gỡ cấm người dùng",
	commandCategory: "admin",
	usages: "[unban/ban/search] [ID or text]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"reason": "Lý do",
		"at": "vào lúc",
		"allCommand": "toàn bộ lệnh",
		"commandList": "những lệnh",
		"banSuccess": "[📌 𝐁𝐚𝐧 𝐔𝐬𝐞𝐫 💸] 𝐕𝐮̛̀𝐚 𝐱𝐮̛̉ 𝐥𝐲́ 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐜𝐚̂́𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: %1",
		"unbanSuccess": "[🎀 𝐔𝐧𝐛𝐚𝐧 𝐔𝐬𝐞𝐫 💎] 𝐕𝐮̛̀𝐚 𝐱𝐮̛̉ 𝐥𝐲́ 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐠𝐨̛̃ 𝐜𝐚̂́𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 %1",
		"banCommandSuccess": "[🔰 𝐁𝐚𝐧𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐔𝐬𝐞𝐫 🔰] 𝐕𝐮̛̀𝐚 𝐱𝐮̛̉ 𝐥𝐲́ 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐜𝐚̂́𝐦 𝐥𝐞̣̂𝐧𝐡 𝐫𝐢𝐞̂𝐧𝐠 𝐯𝐨̛́𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: %1",
		"unbanCommandSuccess": "[🍑 𝐔𝐧𝐛𝐚𝐧𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐔𝐬𝐞𝐫 🎲] 𝐕𝐮̛̀𝐚 𝐱𝐮̛̉ 𝐥𝐲́ 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐠𝐨̛̃ 𝐜𝐚̂́𝐦 %1 𝐫𝐢𝐞̂𝐧𝐠 𝐯𝐨̛́𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: %2",
		"errorReponse": "%1 Không thể hoàn tất công việc bạn yêu cầu",
		"IDNotFound": "%1 ID người dùng bạn nhập không tồn tại trong cơ sở dữ liệu",
		"existBan": "[📌 𝐁𝐚𝐧 𝐔𝐬𝐞𝐫 💸]] 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 %1 𝐯𝐚̂̃𝐧 𝐜𝐨̀𝐧 𝐛𝐢̣ 𝐛𝐚𝐧 𝐭𝐮̛̀ 𝐭𝐫𝐮̛𝐨̛́𝐜 %2 %3",
		"notExistBan": "[🎀 𝐔𝐧𝐛𝐚𝐧 𝐔𝐬𝐞𝐫 💎] 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐛𝐚̣𝐧 𝐧𝐡𝐚̣̂𝐩 𝐜𝐡𝐮̛𝐚 𝐭𝐮̛̀𝐧𝐠 𝐛𝐢̣ 𝐜𝐚̂́𝐦 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭",
		"missingCommandInput": "%1 Phần command cần cấm không được để trống!",
		"notExistBanCommand": "[🍑 𝐔𝐧𝐛𝐚𝐧𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐔𝐬𝐞𝐫 🎲] 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐈𝐃 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐛𝐚̣𝐧 𝐧𝐡𝐚̣̂𝐩 𝐜𝐡𝐮̛𝐚 𝐭𝐮̛̀𝐧𝐠 𝐛𝐢̣ 𝐜𝐚̂́𝐦 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡",

		"returnBan": "[📌 𝐁𝐚𝐧 𝐔𝐬𝐞𝐫 💸] 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐜𝐡𝐨 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐧𝐚̀𝐲 𝐯𝐞̂̀ 𝐯𝐨̛́𝐢 𝐜𝐚́𝐭 𝐛𝐮̣𝐢 📵:\n- 𝐈𝐃 𝐯𝐚̀ 𝐭𝐞̂𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐜𝐚̂̀𝐧 𝐜𝐚̂́𝐦 💈: %1%2\n\n❮ 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐱𝐚́𝐜 𝐧𝐡𝐚̣̂𝐧 𝐭𝐡𝐢 𝐡𝐚̀𝐧𝐡 𝐚́𝐧 ❯",
		"returnUnban": "[🎀 𝐔𝐧𝐛𝐚𝐧 𝐔𝐬𝐞𝐫 💎] 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐜𝐡𝐨 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐧𝐚̀𝐲 𝐦𝐨̣̂𝐭 𝐤𝐡𝐨𝐚𝐧 𝐡𝐨̂̀𝐧𝐠 𝐯𝐞̂̀ 𝐡𝐨𝐚̀ 𝐧𝐡𝐚̣̂𝐩 𝐯𝐨̛́𝐢 𝐱𝐚̃ 𝐡𝐨̣̂𝐢❗:\n- 𝐈𝐃 𝐯𝐚̀ 𝐭𝐞̂𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐜𝐚̂̀𝐧 𝐠𝐨̛̃ 𝐜𝐚̂́𝐦 💌: %1\n\n❮ 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐱𝐚́𝐜 𝐧𝐡𝐚̣̂𝐧 𝐛𝐚̃𝐢 𝐛𝐨̉ 𝐭𝐡𝐢 𝐡𝐚̀𝐧𝐡 𝐚́𝐧 ❯",
		"returnBanCommand": "[🔰 𝐁𝐚𝐧𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐔𝐬𝐞𝐫 🔰] 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐜𝐚̂́𝐦 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐫𝐢𝐞̂𝐧𝐠 𝐯𝐨̛́𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 🔒:\n - 𝐈𝐃 𝐯𝐚̀ 𝐭𝐞̂𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐜𝐚̂̀𝐧 𝐜𝐚̂́𝐦 📌: %1\n- 𝐂𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐜𝐚̂̀𝐧 𝐜𝐚̂́𝐦 🛠: %2\n\n❮ 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐱𝐚́𝐜 𝐧𝐡𝐚̣̂𝐧 𝐭𝐡𝐢 𝐡𝐚̀𝐧𝐡 𝐚́𝐧 ❯",
		"returnUnbanCommand": "[🍑 𝐔𝐧𝐛𝐚𝐧𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐔𝐬𝐞𝐫 🎲] 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐠𝐨̛̃ 𝐜𝐚̂́𝐦 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐫𝐢𝐞̂𝐧𝐠 𝐯𝐨̛́𝐢 𝐯𝐨̛́𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 🎀:\n - 𝐈𝐃 𝐯𝐚̀ 𝐭𝐞̂𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐜𝐚̂̀𝐧 𝐠𝐨̛̃ 𝐜𝐚̂́𝐦 𝐥𝐞̣̂𝐧𝐡 🔗: %1\n- 𝐂𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐜𝐚̂̀𝐧 𝐠𝐨̛̃ 𝐜𝐚̂́𝐦 📜: %2\n\n❮ 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐱𝐚́𝐜 𝐧𝐡𝐚̣̂𝐧 𝐛𝐚̃𝐢 𝐛𝐨̉ 𝐭𝐡𝐢 𝐡𝐚̀𝐧𝐡 𝐚́𝐧 ❯",
	
		"returnResult": "Đây là kết quả phù hợp: \n",
		"returnNull": "Không tìm thấy kết quả dựa vào tìm kiếm của bạn!",
		"returnList": "[ User List ]\nHiện tại đang có %1 người dùng bị ban, dưới đây là %2 người dùng\n\n%3",
		"returnInfo": "[ Info User ] Đây là một sô thông tin về người dùng bạn cần tìm:\n- ID và tên của người dùng: %1n- Có bị ban?: %2 %3 %4\n- Bị ban lệnh?: %5"
	},
	"en": {
		"reason": "Reason",
		"at": "At",
		"allCommand": "All commands",
		"commandList": "Commands",
		"banSuccess": "[ Ban User ] Banned user: %1",
		"unbanSuccess": "[ Unban User ] Unbanned user %1",
		"banCommandSuccess": "[ banCommand User ] Banned command with user: %1",
		"unbanCommandSuccess": "[ UnbanCommand User ] Unbanned command %1 with user: %2",
		"errorReponse": "%1 Can't do what you request",
		"IDNotFound": "%1 ID you import doesn't exist in database",
		"existBan": "[ Ban User ] User %1 has been banned before %2 %3",
		"notExistBan": "[ Unban User ] User hasn't been banned before",
		"missingCommandInput": "%1 You have to import the command you want to ban!",
		"notExistBanCommand": "[ UnbanCommand User ] User ID hasn't been banned before",

		"returnBan": "[ Ban User ] You are requesting to ban user:\n- User ID and name who you want to ban: %1%2\n\n❮ Reaction this message to complete ❯",
		"returnUnban": "[ Unban User ] You are requesting to unban user:\n- User ID and name who you want to ban: %1\n\n❮ Reaction this message to complete ❯",
		"returnBanCommand": "[ banCommand User ] You are requesting to ban command with user:\n - User ID and name who you want to ban: %1\n- Commands: %2\n\n❮ Reaction this message to complete ❯",
		"returnUnbanCommand": "[ UnbanCommand User ] You are requesting to unban command with user:\n - User ID and name: %1\n- Commands: %2\n\n❮ Reaction this message to complete ❯",
	
		"returnResult": "This is your result: \n",
		"returnNull": "There is no result with your input!",
		"returnList": "[ User List ]\There are %1 banned user, here are %2 user\n\n%3",
		"returnInfo": "[ Info User ] Here is some information about the user who you want to find:\n- User ID and name: %1n- Banned?: %2 %3 %4\n- Command banned?: %5"
	}
}

module.exports.handleReaction = async ({ event, api, Users, handleReaction, getText }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	const moment = require("moment-timezone");
	const { threadID } = event;
	const { messageID, type, targetID, reason, commandNeedBan, nameTarget } = handleReaction;
	
	const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
	global.client.handleReaction.splice(global.client.handleReaction.findIndex(item => item.messageID == messageID), 1);
	
	switch (type) {
		case "ban": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.banned = true;
				data.reason = reason || null;
				data.dateAdded = time;
				await Users.setData(targetID, { data });
				global.data.userBanned.set(targetID, { reason: data.reason, dateAdded: data.dateAdded });
				return api.sendMessage(getText("banSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ Ban User ]"), threadID) };
		}

		case "unban": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.banned = false;
				data.reason = null;
				data.dateAdded = null;
				await Users.setData(targetID, { data });
				global.data.userBanned.delete(targetID);
				return api.sendMessage(getText("unbanSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ Unban User ]"), threadID) };
		}

		case "banCommand": {
			try {	
				let data = (await Users.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned || [], ...commandNeedBan];
				await Users.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				return api.sendMessage(getText("banCommandSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ banCommand User ]"), threadID) };
		}

		case "unbanCommand": {
			try {
				let data = (await Users.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned.filter(item => !commandNeedBan.includes(item))];
				await Users.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				if(data.commandBanned.length == 0) global.data.commandBanned.delete(targetID)
				return api.sendMessage(getText("unbanCommandSuccess", ((data.commandBanned.length == 0) ? getText("allCommand") : `${getText("commandList")}: ${commandNeedBan.join(", ")}`), `${targetID} - ${nameTarget}`), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ UnbanCommand User ]"), threadID) };
		}
	}
}

module.exports.run = async ({ event, api, args, Users, getText }) => {
	const { threadID, messageID } = event;
	const type = args[0];
	var targetID = String(args[1]);
	var reason = (args.slice(2, args.length)).join(" ") || null;

	if (isNaN(targetID)) {
		const mention = Object.keys(event.mentions);
		args = args.join(" ");
		targetID = String(mention[0]);
		reason = (args.slice(args.indexOf(event.mentions[mention[0]]) + (event.mentions[mention[0]] || "").length + 1, args.length)) || null;
	}

	switch (type) {
		case "ban":
		case "-b": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Ban User ]"), threadID, messageID);
			if (global.data.userBanned.has(targetID)) {
				const { reason, dateAdded } = global.data.userBanned.get(targetID) || {};
				return api.sendMessage(getText("existBan", targetID, ((reason) ? `${getText("reason")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")} ${dateAdded}` : "")), threadID, messageID);
			}
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnBan", `${targetID} - ${nameTarget}`, ((reason) ? `\n- ${getText("reason")}: ${reason}` : "")), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "ban",
					targetID,
					reason,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "unban":
		case "-ub": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Unban User ]"), threadID, messageID);
			if (!global.data.userBanned.has(targetID)) return api.sendMessage(getText("notExistBan"), threadID, messageID);
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnUnban", `${targetID} - ${nameTarget}`), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "unban",
					targetID,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "search":
		case "-s": {
			const contentJoin = reason || "";
			const getUsers = (await Users.getAll(['userID', 'name'])).filter(item => !!item.name);
			var matchUsers = [], a = '', b = 0;
			getUsers.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchUsers.push({
						name: i.name,
						id: i.userID
					});
				}
			});
			matchUsers.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchUsers.length > 0) ? api.sendMessage(getText("returnResult", a), threadID) : api.sendMessage(getText("returnNull"), threadID);
			return;
		}
		
		case "banCommand":
		case "-bc": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ BanCommand User ]"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", "[ BanCommand User ]"), threadID, messageID);
			if (reason == "all") {
				var allCommandName = [];
				const commandValues = global.client.commands.keys();
				for (const cmd of commandValues) allCommandName.push(cmd);
				reason = allCommandName.join(" ");
			}
			const commandNeedBan = reason.split(" ");
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnBanCommand", `${targetID} - ${nameTarget}`, ((commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "banCommand",
					targetID,
					commandNeedBan,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "unbanCommand":
		case "-ubc": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ UnbanCommand User ]"), threadID, messageID);
			if (!global.data.commandBanned.has(targetID)) return api.sendMessage(getText("notExistBanCommand"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", "[ UnbanCommand User ]"), threadID, messageID);
			if (reason == "all") {
				reason = (global.data.commandBanned.get(targetID)).join(" ");
			}
			const commandNeedBan = reason.split(" ");
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnUnbanCommand", `${targetID} - ${nameTarget}`, ((commandNeedBan.length == global.data.commandBanned.get(targetID).length) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "unbanCommand",
					targetID,
					commandNeedBan,
					nameTarget,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "list":
		case "-l": {
			var listBan = [], i = 0;
			const threadData = global.data.userBanned.keys();
			for (; ;) {
				let idUser = String(threadData.next().value);
				if (typeof idUser == "undefined") {
					const userName = (await Users.getData(idUser)).name || "unknown";
					listBan.push(`${i+=1}/ ${idUser} - ${userName}`);
				}
				if (i == global.data.userBanned.size || i == (parseInt(reason) || 10)) break;
			}
			return api.sendMessage(getText("returnList",(global.data.userBanned.size || 0), listBan.length, listBan.join("\n")), threadID, messageID);
		}

		case "info":
		case "-i": {
			if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Info User ]"), threadID, messageID);
			if (global.data.commandBanned.has(targetID)) { var commandBanned = global.data.commandBanned.get(targetID) || [] };
			if (global.data.userBanned.has(targetID)) { var { reason, dateAdded } = global.data.userBanned.get(targetID) || {} };
			const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
			return api.sendMessage(getText("returnInfo", `${targetID} - ${nameTarget}`, ((!dateAdded) ? "YES" : "NO"), ((reason) ? `${getText("reson")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")}: ${dateAdded}` : ""), ((commandBanned) ? `YES: ${(commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", ")}` : "NO")), threadID, messageID);
		}
	}
}