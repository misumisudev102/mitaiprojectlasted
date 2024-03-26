module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "D-Jukie",
    description: "Thêm người dùng vào nhóm bằng link hoặc uid",
    commandCategory: "tiện ích",
    usages: "adduser [url]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('Vui lòng nhập link hoặc id người dùng muốn thêm vào nhóm!', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await axios.get(`https://nguyenmanh.name.vn/api/fuid?url=${link}&apikey=pNKvedtJ`);
    var uidUser = res.data.result
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`Thành viên đã có mặt trong nhóm`, threadID, messageID);
    if (err) return api.sendMessage(`Không thể thêm thành viên vào nhóm do tài khoản không có nút nhắn tin`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Đã thêm người dùng vào danh sách phê duyệt`, threadID, messageID);
    else return api.sendMessage(`Thêm thành viên vào nhóm thành công`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`Thành viên đã có mặt trong nhóm`, threadID, messageID);
    if (err) return api.sendMessage(`Không thể thêm thành viên vào nhóm do tài khoản không có nút nhắn tin`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Đã thêm người dùng vào danh sách phê duyệt`, threadID, messageID);
    else return api.sendMessage(`Thêm thành viên vào nhóm thành công`, threadID, messageID);
    });
  }
  }