const tlt = 30  // Tỉ lệ thắng(%)
const min = 100 // Tiền cược tối thiểu($)

module.exports.config = {
  name: "bc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khoa",
  description: "Bầu cua nhưng nó lạ lắm :))",
  commandCategory: "Game",
  usages: "[bầu/cua/tôm/cá/nai/gà] money",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args, Currencies }) {
  const { threadID, messageID, senderID } = event;
  const fs = require("fs");
  const { loadImage, createCanvas } = require("canvas");
  if (args.length < 0x2) return api.sendMessage("\x4B\x68\xF4\x6E\x67\x20\u0111\xFA\x6E\x67\x20\x63\xFA\x20\x70\x68\xE1\x70\x21", threadID, messageID);
  var allface = ["\x62\u1EA7\x75", "\x63\x75\x61", "\x74\xF4\x6D", "\x63\xE1", "\x6E\x61\x69", "\x67\xE0" ];
  var datcuoc = args[0].toLowerCase();
  if (!allface.includes(datcuoc)) return api.sendMessage("\x4C\xE0\x6D\x20\u0111\xE9\x6F\x20\x67\xEC\x20\x63\xF3\x20\x6D\u1EB7\x74\x20" + datcuoc + "\x20\x3A\x29\x29\x3F", threadID, messageID);
  var dataMoney = await Currencies.getData(senderID);
  var money = dataMoney.money;
  var tiencuoc = parseInt(args[1]);
  if (isNaN(tiencuoc) || tiencuoc < 0x1) return api.sendMessage("\x54\x69\u1EC1\x6E\x20\x63\u01B0\u1EE3\x63\x20\u0111\xE9\x6F\x20\x68\u1EE3\x70\x20\x6C\u1EC7\x21", threadID, messageID);
  if (tiencuoc < min) return api.sendMessage("\x43\u01B0\u1EE3\x63\x20\x67\xEC\x20\x63\xF3\x20" + tiencuoc + "\x24\x20\xED\x74\x20\x74\x68\u1EBF\x21", threadID, messageID);
  if (tiencuoc > money) return api.sendMessage("\x42\u1EA1\x6E\x20\u0111\xE9\x6F\x20\x63\xF3\x20\u0111\u1EE7\x20" + tiencuoc + "\x24\x20\u0111\u1EC3\x20\x63\x68\u01A1\x69\x21", threadID, messageID);
  var luckynumber = Math.floor(Math.random() * 0x64) + 0x1;
  if (luckynumber > tlt) allface.splice(allface.indexOf(datcuoc), 0x1);
  var ketqua = [ allface[Math.floor(Math.random() * allface.length)], allface[Math.floor(Math.random() * allface.length)], allface[Math.floor(Math.random() * allface.length)] ];
  function getlink(face) {
    var _0x7e7d;
    if (face == "\x62\u1EA7\x75") _0x7e7d = "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x70\x6F\x73\x74\x69\x6D\x67\x2E\x63\x63\x2F\x53\x52\x33\x71\x79\x39\x33\x39\x2F\x62\x61\x75\x2E\x70\x6E\x67";
    if (face == "\x63\x75\x61") _0x7e7d = "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x70\x6F\x73\x74\x69\x6D\x67\x2E\x63\x63\x2F\x30\x6A\x62\x50\x52\x6E\x57\x78\x2F\x63\x75\x61\x2E\x70\x6E\x67";
    if (face == "\x74\xF4\x6D") _0x7e7d = "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x70\x6F\x73\x74\x69\x6D\x67\x2E\x63\x63\x2F\x74\x43\x6E\x70\x42\x72\x6E\x4E\x2F\x74\x6F\x6D\x2E\x70\x6E\x67";
    if (face == "\x63\xE1") _0x7e7d = "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x70\x6F\x73\x74\x69\x6D\x67\x2E\x63\x63\x2F\x42\x6E\x57\x73\x6B\x78\x78\x39\x2F\x63\x61\x2E\x70\x6E\x67";
    if (face == "\x6E\x61\x69") _0x7e7d = "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x70\x6F\x73\x74\x69\x6D\x67\x2E\x63\x63\x2F\x30\x35\x42\x39\x64\x67\x6A\x4E\x2F\x6E\x61\x69\x2E\x70\x6E\x67";
    if (face == "\x67\xE0") _0x7e7d = "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x70\x6F\x73\x74\x69\x6D\x67\x2E\x63\x63\x2F\x4B\x7A\x39\x78\x48\x77\x35\x4A\x2F\x67\x61\x2E\x70\x6E\x67";
    return _0x7e7d;
  }
  var canvas = createCanvas(0x4B0, 0x384);
  var ctx = canvas.getContext("2d");
  var _0xda22 = await loadImage("\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x70\x6F\x73\x74\x69\x6D\x67\x2E\x63\x63\x2F\x39\x66\x63\x56\x56\x57\x53\x62\x2F\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2E\x70\x6E\x67");
  ctx.drawImage(_0xda22, 0x0, 0x0, 0x4B0, 0x384);
  var count = 0x0;
  for (let i = 0x0; i <= 0x2; i++) {
    if (ketqua[i] == datcuoc) count++;
    var bc = await loadImage( getlink(ketqua[i]) );
    var x = i == 0x0 ? 0xFA : i == 0x1 ? 0x264 : 0x1E0;
    var y = i == 0x0 ? 0x81 : i == 0x1 ? 0x86 : 0x158;
    ctx.drawImage(bc, x, y, 0x172, 0x172);
  };
  const path = __dirname + "/cache/baucua.png";
  fs.writeFileSync(path, canvas.toBuffer("image/png"));
  var item = count == 0x0 ? `-${tiencuoc}$` : `+${tiencuoc * count}$`;
  if (count == 0x0) {
    Currencies.decreaseMoney(senderID, tiencuoc);
  } else Currencies.increaseMoney(senderID, tiencuoc * count);
  return api.sendMessage({
    body: "\x4B\u1EBF\x74\x20\x71\x75\u1EA3\x3A\x20" + ketqua.join("\x2C\x20") + "\n\x43\xF3\x20" + count + "\x20" + datcuoc + "\x20" + item,
    attachment: fs.createReadStream(path)
  }, threadID, () => fs.unlinkSync(path), messageID);
}