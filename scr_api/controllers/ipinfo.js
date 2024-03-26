const { errorHandler } = require("../utils");
const ipinfo = require('ipinfo');

exports.ipinfo = async (req, res, next) => {
  const ip = req.query.ip;
  if (!ip) {
    return res.status(400).json({ error: 'Vui lòng nhập ip mạng cần lấy thông tin!' });
  }
  try {
    const ipDetails = await ipinfo(ip);
    const filteredDetails = {
      ip: ipDetails.ip,
      hostname: ipDetails.hostname,
      city: ipDetails.city,
      region: ipDetails.region,
      country: ipDetails.country,
      loc: ipDetails.loc,
      postal: ipDetails.postal,
      org: ipDetails.org,
      timezone: ipDetails.timezone,
      phone: ipDetails.phone,
    };
    res.json(filteredDetails);
  } catch (error) {
    res.status(500).json({ error: 'Không thể lấy thông tin IP.' });
  }
};