module.exports.config = {
	name: "locbox", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 2, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "TruongNguu", // Công nhận module sở hữu là ai
	description: "locccc", // Thông tin chi tiết về lệnh
	commandCategory: "Tiện ích", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
};

module.exports.run = async ({ api, event, args, Threads }) => {
	const { threadID, messageID, senderID } = event;
	const send = async (msg) => await new Promise(resolve => api.sendMessage(msg, threadID, (err, info) => resolve(info),messageID));
	const sendIB = async (msg) => await new Promise(resolve => api.sendMessage(msg, senderID, (err, info) => resolve(info)));
	if(args[1]) return send("Chỉ có thể sử dụng lệnh này ở inbox với bot");
	if(args[0] == "null") {
		let count = 0;
		let spam = await api.getThreadList(global.data.allThreadID.length, null, ["INBOX"]);
		for(let i in spam) {
			if(spam[i].threadType == 2) {
				try {
					if(spam[i].name == null) {
						await api.removeUserFromGroup(api.getCurrentUserID(), spam[i].threadID);
						count++;
					}
				} catch(e) { continue }
			} else continue;
		}
		if(count == 0) return send("Không có nhóm nào được xóa");
		return sendIB(`Đã rời ${count} nhóm không có tên`);
	}
	if(isNaN(args[0])) return send("Bạn phải nhập một số");
	let input = parseInt(args[0]);
	let count = 0;
	let spam = await api.getThreadList(global.data.allThreadID.length, null, ["INBOX"]);
	for(let i in spam) {
		if(spam[i].threadType == 2) {
			try {
				if(spam[i].participantIDs.length <= input - 1) {
					await api.removeUserFromGroup(api.getCurrentUserID(), spam[i].threadID);
					count++;
				}
			} catch(e) { continue }
		} else continue;
	}
	if(count == 0) return send("Không có nhóm nào được xóa");
	return sendIB(`Đã rời ${count} nhóm có ít hơn ${input} người`);
}	