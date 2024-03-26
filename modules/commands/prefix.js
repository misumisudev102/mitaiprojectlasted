export default {
	name: "prefix",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "NDKhánh",
	description: "xem prefix hiện tại",
	shortDescription: "xem prefix hiện tại",
	usages: [''],
	cooldowns: 5
};
export async function noprefix({ api, event, ThreadSettings, global }) {
	const threadSetting = ThreadSettings.find(item => item.id == event.threadID) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX
	if (event.body == "prefix" || event.body == "Prefix") {
		return api.sendMessage(`[ PREFIX ]\n» Prefix hiện tại của nhóm : ${prefix}\n» Prefix mặc định trên hệ thống bot: ${global.config.PREFIX}`, event.threadID, event.messageID);
	}
}

export async function run() { }