const { errorHandler } = require("../utils");
const axios = require('axios');

exports.autodown = async (req, res, next) => {
  try {
    const { url } = req.query;
    if (!url) {
      res.json('Thiếu Url vui lòng nhập Url ảnh hoặc video cần down!');
    }

    const response = await axios.get(url, { responseType: 'arraybuffer' });
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
    } else if (
      url.includes('facebook.com') ||
      url.includes('tiktok.com') ||
      url.includes('instagram.com')
    ) {
      if (contentType.includes('text/html')) {
        const convertedUrl = /* Chuyển đổi thành URL hình ảnh hoặc video */;
        res.redirect(convertedUrl);
      } else {
        throw new Error('Unsupported content type');
      }
    } else {
      throw new Error('Unsupported content type');
    }
  } catch (error) {
    errorHandler(error, res);
  }
};