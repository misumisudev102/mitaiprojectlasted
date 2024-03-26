module.exports.config = {
  name: 'listbox',
  version: '1.0.0',
  credits: 'manhIT',//Mod by H.Thanh
  hasPermssion: 2,
  description: 'Danh sách nhóm Bot đã tham gia',
  commandCategory: 'Super Admin & Admin',
  usages: '< out >',
  cooldowns: 15
};


module.exports.handleReply = async function({ api, event, args, Threads, handleReply }) {

  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  var arg = event.body.split(" ");
  var idgr = handleReply.groupid[arg[1] - 1];


  switch (handleReply.type) {

    case "reply":
      {
        if (arg[0] == "out" || arg[0] == "Out") {
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr);
          api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → Đã out nhóm có ID: " + idgr + "\n" + (await Threads.getData(idgr)).name, event.threadID, event.messageID);
          break;
        }

      }
  }
};


module.exports.run = async function({ api, event, client }) {
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

  var listthread = [];

  //////////


  for (var groupInfo of list) {
    let data = (await api.getThreadInfo(groupInfo.threadID));

    listthread.push({
      id: groupInfo.threadID,
      name: groupInfo.name,
      sotv: data.userInfo.length,
      messageCount: groupInfo.messageCount,
    });

  } //for

  var listbox = listthread.sort((a, b) => {
    if (a.sotv > b.sotv) return -1;
    if (a.sotv < b.sotv) return 1;
  });

  let msg = '',
    i = 1;
  var groupid = [];
  for (var group of listbox) {
    msg += `${i++}. ${group.name}\n💌 𝗧𝗜𝗗: ${group.id}\n👤 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻: ${group.sotv}\n💬 𝗧𝗼̂̉𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${group.messageCount}\n\n`;
    groupid.push(group.id);
  }

  api.sendMessage(msg + '📌 𝐑𝐞𝐩𝐥𝐲 "𝐨𝐮𝐭" 𝐡𝐨𝐚̣̆𝐜 "𝐛𝐚𝐧" + 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐝𝐞̂̉ 𝐨𝐮𝐭 𝐡𝐨𝐚̣̆𝐜 𝐛𝐚𝐧 𝐭𝐡𝐫𝐞𝐚𝐝 𝐛𝐚̣𝐧 𝐜𝐡𝐨̣𝐧', event.threadID, (e, data) =>
    global.client.handleReply.push({
      name: this.config.name,
      author: event.senderID,
      messageID: data.messageID,
      groupid,
      type: 'reply'
    })
  );
};