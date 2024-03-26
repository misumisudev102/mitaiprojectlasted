module.exports.config = {
  name: "spamlag",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NguyenDucTai",
  description: "Bố ửa nát mặt chó mày nè",
  commandCategory: "spamlag",
  usages: "Tài trùm spam",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.run = async function ({ api, event, args }) {
  var sogiay = 4000;
  var solan = 30000;
  var ngon = '💢[𝑁𝑔𝑢𝑦𝑒𝑛 𝐷𝑢𝑐 𝑇𝑎𝑖]->𝑇𝑟𝑢̀𝑚 𝑣𝑖𝑒̂́𝑡 𝑐𝑜𝑑𝑒 𝑏𝑜𝑡 𝑠𝑝𝑎𝑚 𝑣𝑎̉ 𝑐ℎ𝑒̂́𝑡 𝑙𝑢̃ 𝑐ℎ𝑢́ն𝑔 𝑚𝑎̀𝑦 𝑑𝑜̀𝑖 𝑑𝑢́ 𝑡𝑟𝑒𝑜 𝑣ớ𝑖 𝑐ℎ𝑎❌📍😈'
  try {
    for (let i = 0; i < solan; i++) {
    const botID = api.getCurrentUserID();
    const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
    var body = ngon, mentions = [], index = 0;

    for (const idUser of listUserID) {
      body = "‎" + body;
      mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
      index -= 1;
    }
    
      setTimeout(() => {
        api.sendMessage({ body, mentions }, event.threadID);
      }, i * solan);
    }
  } catch (e) {
    return console.log(e);
  }
}
