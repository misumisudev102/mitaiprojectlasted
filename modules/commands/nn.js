module.exports.config = {
  name: "ngủ ngon",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Chúc ngủ ngon",
  commandCategory: "Random-mp4",
  usages: "api",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("ngủ ngon")==0 || (event.body.indexOf("Ngủ ngon")==0) || event.body.indexOf("nn")==0 ||
event.body.indexOf("Nn")==0 ||
event.body.indexOf("Ngủ")==0 ||
event.body.indexOf("ngủ")==0 ||
event.body.indexOf("nnmđ")==0 ||
event.body.indexOf("Nnmđ")==0 ||
event.body.indexOf("NN")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/ZRB0R4Q.mp4",
      "https://i.imgur.com/Mlhkvsc.mp4",
      "https://i.imgur.com/D3XUjSU.mp4",
      "https://i.imgur.com/qp3rPA2.mp4",
      "https://i.imgur.com/qxNrZLH.mp4",
          ];
     var callback = () => api.sendMessage({body:`𝗖𝗵𝘂́𝗰 𝗰𝗮̣̂𝘂 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 𝗺𝗼̛ đ𝗲̣𝗽 𝗻𝗵𝗼́🥺❤️\n->𝗬𝗲̂𝘂 𝗰𝗮̣̂𝘂 𝗻𝗵𝗶𝗲̂̀𝘂😍\n\n->𝗠𝗼𝗮 𝗺𝗼𝗮 𝗺𝗼𝗮😘😘😘`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };