const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "hôn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mirai-team",
  description: "hôn người Bạn Muốn",
  commandCategory: "game",
  usages: "@tag",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
"https://i.postimg.cc/G37G3WDd/574fcc7979b6f-1533876767756310501023.gif",
"https://i.postimg.cc/XqzC25Wp/574fcc797b21e-1533876813029926506824.gif",
"https://i.postimg.cc/DZ5sXDYQ/574fcc92e98c3-1533876840028170363441.gif",
"https://i.postimg.cc/yYD9DLh9/Crafty-Live-Junco-size-restricted.gif",
"https://i.postimg.cc/NFJ1WV6G/dedac9ceaace3856b6fe85522579fb88.gif"
];
  
   var callback = () => api.sendMessage({body: `Baby ${tag} à!\nHun một cái nè💗` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/hon.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/hon.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/hon.gif")).on("close",() => callback());
   };