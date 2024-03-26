const { errorHandler } = require("../utils");
const requestIp = require('request-ip');

  exports.ipcheck = async (req, res, next) => {
  let ip = req.query.ip || req.clientIp;

  if (!ip) {
    return res.status(400).json({ error: 'Thiếu địa chỉ IP để kiểm tra ip sạch hoặc bẩn' });
  }
  const isClean = !ip.includes('blacklisted');

  res.json({ ip: ip, isClean });
};