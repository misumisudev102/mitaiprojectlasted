exports.config = {
  name: 'thuebot',
  version: '0.0.1',
  hasPermssion: 0,
  credits: 'DC-Nam',// ý tưởng code từ Q.huy (táo)
  description: 'Thuê bot.', 
  commandCategory: 'Admin',
  usages: '[]',
  cooldowns: 3
};

let fs = require('fs');


if (!fs.existsSync(__dirname+'/data'))fs.mkdirSync(__dirname+'/data');

let path = __dirname+'/data/thuebot.json';
let data = [];
let save = ()=>fs.writeFileSync(path, JSON.stringify(data));

if (!fs.existsSync(path))save(); else data = require(path);


let form_mm_dd_yyyy = (input = '', split = input.split('/'))=>`${split[1]}/${split[0]}/${split[2]}`;
let invalid_date = date=>/^Invalid Date$/.test(new Date(date));


exports.run = function(o) {
  let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
  
  if (!["100077497896569" ].includes(o.event.senderID))return send(`Lệnh này dành cho người điều hành chạy bot!`);
  
  switch (o.args[0]) {
    case 'add': {
      if (!o.args[1])return send(`usage {prefix}{command name} add {ID nhóm} {ID người dùng} {Thời gian bắt đầu thê} => {Thời gian kết thúc}`)
      // @usage {prefix}{command name} add {ID thread} {ID user} {time start} => {time end}
      let t_id = o.args[1];
      let id = o.args[2];
      let time_start = o.args[3];
      let time_end = o.args[5];

      if (isNaN(id) || isNaN(t_id))return send(`ID Không Hợp Lệ!`);
      if (invalid_date(form_mm_dd_yyyy(time_start)) || invalid_date(form_mm_dd_yyyy(time_end)))return send(`Thời Gian Không Hợp Lệ!`);

      data.push({
        t_id, id, time_start, time_end,
      });
      send(`Đã thêm ID vào danh sách thuê bot.`);
    };
      break;
    case 'list': {
      send(`=== [ Danh Sách Thuê Bot ] ===\n\n${data.map(($, i)=>`${i+1}. ${global.data.userName.get($.id)}\n📝 Tình trạng: ${new Date(form_mm_dd_yyyy($.time_end)).getTime() >= Date.now()+25200000?'Chưa Hết Hạn ✅': 'Đã Hết Hạn ❎'}\n🌾 Nhóm: ${(global.data.threadInfo.get($.t_id) || {}).threadName}`).join('\n─────────────────\n')}\n\n→ Reply STT để xem chi tiết.\n→ Reply del STT để xóa khỏi danh sách.\n→ Reply out STT để thoát nhóm (cách nhau để chọn nhiều số)\n→ Reply giahan STT {time_start} => {time_end}`, (err, res)=>(res.name = exports.config.name, res.event = o.event, res.data = data, global.client.handleReply.push(res)));
    };
      break;

    default: send(`Dùng: ${global.config.PREFIX}thuebot add → Để thêm nhóm vào danh sách thuê bot\nDùng: ${global.config.PREFIX}thuebot list → Để xem danh sách thuê bot\n𝗛𝗗𝗦𝗗 → ${global.config.PREFIX}thuebot lệnh cần dùng.`)
      break;
  }
  save();
};
exports.handleReply = async function(o) {
  let _ = o.handleReply;
  let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);

  if (o.event.senderID != _.event.senderID)return;

  if (isFinite(o.event.args[0])) {
    let info = data[o.event.args[0]-1];

    if (!info)return send(`STT không tồn tại!`);

    return send(`== [ Thông Tin Thuê Bot ] ==\n─────────────────\n👤 Tên người thuê: ${global.data.userName.get(info.id)}\n🌐 link Facebook: https://www.facebook.com/profile.php?id=${info.id}\n👥 Nhóm: ${(global.data.threadInfo.get(info.t_id) || {}).threadName}\n⚡ ID Nhóm: ${info.t_id}\n📆 Ngày Thuê: ${info.time_start}\n⏳ Hết Hạn: ${info.time_end}\n📌 Còn ${(()=> {
      let time_diff = new Date(form_mm_dd_yyyy(info.time_end)).getTime()-(Date.now()+25200000);
      let days = (time_diff/(1000*60*60*24))<<0;
      let hour = (time_diff/(1000*60*60)%24)<<0;

      return `${days} ngày ${hour} giờ là hết hạn.`;
    })()}`);
  } else if (o.event.args[0].toLowerCase() == 'del') {
    o.event.args.slice(1).sort((a, b)=>b-a).forEach($=>data.splice($-1, 1));
    send(`Đã xóa thành công!`);
  } else if (o.event.args[0].toLowerCase() == 'giahan') {
    let STT = o.event.args[1];
    let time_start = o.event.args[2];
    let time_end = o.event.args[4];
    
    if (invalid_date(form_mm_dd_yyyy(time_start)) || invalid_date(form_mm_dd_yyyy(time_end)))return send(`Thời Gian Không Hợp Lệ!`);
    
    if (!data[STT-1])return send(`STT không tồn tại`);
    
    let $ = data[STT-1];
    
    $.time_start = time_start;
    $.time_end = time_end;
    send(`Đã gia hạn nhóm thành công!`);
  } else if (o.event.args[0].toLowerCase() == 'out') {
    for (let i of o.event.args.slice(1)) await o.api.removeUserFromGroup(o.api.getCurrentUserID(), data[i-1].t_id);
    
    send(`Đã out nhóm theo yêu cầu`);
  };
  save();
};