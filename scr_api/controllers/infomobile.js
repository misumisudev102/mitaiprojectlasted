const { errorHandler } = require("../utils");
const http = require('http');
const os = require('os');
const geoip = require('geoip-lite');
const requestIp = require('request-ip');
const useragent = require('useragent');

exports.infomobile = async (req, res, next) => {
  const ipAddress = req.ip;
  const userAgent = req.headers['user-agent'];
  const m = useragent.parse(userAgent);
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const location = geoip.lookup(ip);
  const city = location.city || "Không nhận diện được thành phố";
  const nameqg = location.country || "Không nhận diện được quốc gia";
  
  res.json({
    ip: ip,
    city: city,
    networkSpeed: 'Chưa hỗ trợ lấy tốc độ mạng',
    country: nameqg,
    os: {
      platform: os.platform(),
      release: os.release(),
      name: os.type(),
      version: os.version(),
    },
    software: {
      name: os.hostname(),
      nodeVersion: process.version,
    },
    cpu: {
      modelName: os.cpus()[0].model,
    },
    deviceName: m.device.family,
    deviceVersion: m.device.version,
    Name: m,
    userAgent: userAgent,
  });
};