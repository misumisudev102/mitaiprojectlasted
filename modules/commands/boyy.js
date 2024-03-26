module.exports.config = {
  name: "boyy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Random video",
  commandCategory: "Random-jpg",
  usages: "api",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("trai")==0 || (event.body.indexOf("Trai")==0) || event.body.indexOf("boy")==0 ||
event.body.indexOf("Boy")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/eGuro7H.jpg",
      "https://i.imgur.com/yFm9Rof.jpg",
      "https://i.imgur.com/x8h6tZT.jpg",
      "https://i.imgur.com/CU645Oh.jpg",
      "https://i.imgur.com/NyptGJj.jpg",
      "https://i.imgur.com/LRrGKsq.jpg",
      "https://i.imgur.com/OnQcfAG.jpg",
      "https://i.imgur.com/vbvyYHq.jpg",
      "https://i.imgur.com/4g4yOar.jpg",
      "https://i.imgur.com/VgMRYLn.jpg",
      "https://i.imgur.com/onIWwVd.jpg",
      "https://i.imgur.com/uAJJrf5.jpg",
      "https://i.imgur.com/gY14clZ.jpg",
      "https://i.imgur.com/yJ6P9Bd.jpg",
          ];
     var callback = () => api.sendMessage({body:`𝗔̉𝗻𝗵 𝘁𝗿𝗮𝗶 đ𝗲̣𝗽 𝗰𝘂𝘁𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };