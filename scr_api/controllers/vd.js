const { errorHandler } = require("../utils");

exports.vd = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../vd.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  link1 = data[Math.floor(Math.random() * data.length)].trim();
    link2 = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Đức tài cuti vcl","url":`${link}`,"data":`${link1}`,"sever":`${link2}`});
};