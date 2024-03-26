const { errorHandler } = require("../utils");
const axios = require('axios');

exports.vdtrai = async (req, res, next) => {
  try {
    var data = require('fs-extra').readFileSync(__dirname + '/../vdtrai.txt', 'utf-8').split('\n');
    link = data[Math.floor(Math.random() * data.length)].trim();

    const response = await axios.get(link, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];

    if (contentType.includes('image')) {
      res.set('Content-Type', contentType);
      res.send(response.data);
    } else if (contentType.includes('video')) {
      res.set('Content-Type', contentType);
      res.send(response.data);
    } else if (contentType.includes('audio')) {
      res.set('Content-Type', contentType);
      res.send(response.data);
    } else {
      throw new Error('Loại nội dung không được hỗ trợ');
    }
  } catch (error) {
    errorHandler(error, res);
  }
};