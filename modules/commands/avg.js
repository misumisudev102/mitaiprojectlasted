module.exports.config = {
  name: "av",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("gái")==0 || (event.body.indexOf("Gái")==0) || event.body.indexOf("girl")==0 ||
event.body.indexOf("Girl")==0 ||
event.body.indexOf("vd gái")==0 ||
event.body.indexOf("Vd gái")==0 ||
event.body.indexOf("video gái")==0 ||
event.body.indexOf("Video gái")==0 ||
event.body.indexOf("Gái xinh")==0 ||
event.body.indexOf("gái xinh")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/vdgai`;
var callback = () => api.sendMessage({body:`\n`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };