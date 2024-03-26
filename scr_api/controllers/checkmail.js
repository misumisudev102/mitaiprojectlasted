const { errorHandler } = require("../utils");
const dns = require('dns');
const net = require('net');
const { promisify } = require('util');

const resolveMx = promisify(dns.resolveMx);

exports.checkmail = async (req, res, next) => {
  const email = req.query.email;

  const domain = email.slice(email.lastIndexOf('@') + 1);

  try {
    const mxRecords = await resolveMx(domain);

    const socket = net.createConnection(25, mxRecords[0].exchange);

    socket.setEncoding('utf8');

socket.on('connect', () => {
      socket.write(`HELO ${domain}\r\n`);
      socket.write(`MAIL FROM: <ductai142006@gmail.com>\r\n`);
      socket.write(`RCPT TO: <${email}>\r\n`);
      socket.write(`QUIT\r\n`);
    });

    let response = '';

    socket.on('data', (data) => {
      response += data;
    });

    socket.on('end', () => {
      const isEmailValid = response.includes('250 2.1.5');

      res.json({ live: isEmailValid });

      socket.destroy();
    });

    socket.on('error', () => {
      res.json({ live: false });
    });
  } catch (error) {
    res.json({ error: 'Vui lòng nhập email để check' });
  }
};