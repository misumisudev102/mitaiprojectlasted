module.exports.config = {
	name: "đít",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Vihoo",
	description: "",
	commandCategory: "no prefix",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["đít"] !== "undefined" && thread["đít"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `𝐌𝐨̂𝐧𝐠 𝐝𝐢́𝐭 𝐢́𝐭 𝐭𝐡𝐨̂𝐢 𝐜𝐨́ 𝐧𝐠𝐚̀𝐲 𝐠𝐚̃𝐲 𝐜𝐮😏`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://API-RYO.ducryovn.repl.co/api/gaiditbu.php')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["đít"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "đít",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "đít",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["đít"] == "undefined" || data["đít"] == true) data["đít"] = false;
	else data["đít"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["đít"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}