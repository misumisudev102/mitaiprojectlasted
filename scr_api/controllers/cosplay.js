const { errorHandler } = require("../utils");

exports.cosplay = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../cosplay.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  link1 = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Đức tài cuti vcl",
"url":`${link}`,
"data":`${link1}`});
};