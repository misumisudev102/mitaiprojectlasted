const http = require('http');
const chalk1 = require('chalk');
const geoip = require('geoip-lite');
const whois = require('node-whois');

http.createServer((req, res) => {
  var job = ["#0000FF","#00FF00","#00FFFF"];
var dtai = job[Math.floor(Math.random() * job.length)];
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const location = geoip.lookup(ip);
    
  console.log(chalk1.hex("#" + dtai)(` ◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆\n[ check thiết bị,ip địa chỉ! ]`));
  console.log(chalk1.hex("#" + dtai)(`[ —> Ip thiết bị: ${ipAddress} ]`));
  console.log(chalk1.hex("#" + dtai)(`[ —> Thiết bị: ${userAgent} ]`));
  console.log(chalk1.hex("#" + dtai)(`[ —> Thành phố: ${location.city} ]`));
  console.log(chalk1.hex("#" + dtai)(`[ —> Quốc gia: ${location.country} ]`));
  const start = new Date();

req.on('data', () => {});
req.on('end', () => {
  const end = new Date();
  const elapsed = end - start;

  console.log(chalk1.hex("#" + dtai)(`[ —> Tốc độ mạng: ${elapsed}ms ]`));
});

res.once('finish', () => {
  const responseTime = new Date() - start;

  console.log(chalk1.hex("#" + dtai)(`[ —> Độ trễ của mạng: ${responseTime}mbs ]`));
});
  whois.lookup(ip, (err, data) => {
      if (!err) {
        const orgNameMatch = data.match(/OrgName:\s+(.*)\n/) || "Chưa xác định rõ nhà mạng";
        if (orgNameMatch) {
          console.log(chalk1.hex("#" + dtai)(`[ —> Nhà mạng: ${orgNameMatch[1]} ]`));
            console.log(chalk1.hex("#" + dtai)(` ◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆`));
        }
      }
  });
res.end('Kết nối thành công!');
}).listen(3000, () => {
  console.log('KẾT NỐI THÀNH CÔNG ĐẾN VEVER IP');
});