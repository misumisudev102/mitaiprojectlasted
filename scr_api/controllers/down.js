const { errorHandler } = require("../utils");
const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios");

exports.down = async (req, res, next) => {
  const { url } = req.query;
  if (!url) {
    return res.json('Thiếu Url vui lòng nhập Url ảnh hoặc video cần down!');
  }

  try {
    if (/\.(jpg|jpeg|png|mp4|gif)$/.test(url)) {
      const { data } = await axios.get(url, { responseType: 'arraybuffer' });
      res.send(Buffer.from(data, 'binary'));
    } else {
      const platform = req.query.platform;
      const data = await getDataFromPlatform(platform, url);
      const link = convertDataToLink(data);
      res.send(JSON.stringify(link));
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

async function getDataFromPlatform(platform, url) {
  switch (platform) {
    case "facebook":
      return await getFacebookData(url);
    case "tiktok":
      return await getTikTokData(url);
    case "instagram":
      return await getInstagramData(url);
    case "youtube":
      return await getYouTubeData(url);
    default:
      return null;
  }
}

async function getFacebookData(url) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const data = $(".img[src^='https://']").attr("src");
  return data;
}

async function getTikTokData(url) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const data = $("video").attr("src");
  return data;
}

async function getInstagramData(url) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const data = $(".photo img").attr("src");
  return data;
}

async function getYouTubeData(url) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const data = $(".ytd-thumbnail img").attr("src");
  return data;
}

function convertDataToLink(data) {
  if (data.startsWith("http") || data.startsWith("https")) {
    return data;
  }

  const link = "https://" + data;
  return link;
}