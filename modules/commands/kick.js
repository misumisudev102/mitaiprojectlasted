module.exports.config = {
  name: "kick",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Mirai",
  description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag hoặc reply",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 0
};
module.exports.run = async function () {}

  module.exports.handleEvent = async function ({ api, event, args }) {
    const { threadID, type, messageReply, messageID, mentions } = event;
    const botID = api.getCurrentUserID();
    const { body } = event;

    if (body.toLowerCase() == "kick") {
      try {
        let usersToKick = [];

        if (type === "message_reply" && messageReply.senderID !== botID) {
          usersToKick.push(messageReply.senderID);
        } else if (mentions.length > 0) {
          usersToKick = mentions.filter(mention => mention.id !== botID).map(mention => mention.id);
        } else if (args.length > 0) {
          for (const arg of args) {
            const userID = arg.replace("@", "");
            const memberInfo = await api.getUserInfo(userID);
            if (memberInfo[userID]) {
              usersToKick.push(userID);
            }
          }
        } else {
          return api.sendMessage("Vui lòng tag người cần kick hoặc reply tin nhắn để kick", threadID, messageID);
        }

        if (usersToKick.length > 0) {
          for (const userID of usersToKick) {
            setTimeout(() => {
              api.removeUserFromGroup(userID, threadID, async function (err) {
                if (err) return api.sendMessage("» Bot cần quyền quản trị viên để kick", threadID, messageID);
              });
            }, 1000);
          }
        }
      } catch (e) {
        console.log(e);
        return api.sendMessage("Vui lòng tag người cần kick hoặc reply tin nhắn để kick!", threadID, messageID);
      }
    }
  }
