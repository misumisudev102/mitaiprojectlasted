const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const dns = require('dns');
const geoip = require('geoip-lite');

exports.checkdomain = async (req, res, next) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'Không tìm thấy Url!' });
  }
  
  try {
    const domain = new URL(url).hostname;
    const host = domain;
    dns.lookup(domain, async (err, address, family) => {
      if (err) {
        return res.status(400).json({ error: 'Không thể tìm thấy IP server' });
      }
      
      try {

        const geo = geoip.lookup(address);
        const countryServer = geo ? geo.country : 'Không tìm thấy quốc gia của máy chủ';
        const cityServer = geo ? geo.city : 'Không tìm thấy thành phố của máy chủ';

        const response = await axios.get(`http://${domain}`);
        const html = response.data;
        
        const $ = cheerio.load(html);
        const title = $('title').text();
        const metaDescription = $('meta[name="description"]').attr('content');
        const headings = [];
        const links = [];
        
        $('h1, h2, h3, h4, h5, h6').each((index, element) => {
          headings.push($(element).text());
        });
        
        $('a').each((index, element) => {
          links.push($(element).attr('href'));
        });
        
        const result = {
          host,
          domain,
          ipServer: address,
          countryServer,
          cityServer,
          title,
          metaDescription,
          headings,
          links
        };

        const isAdultContent = html.includes('18+');
        result.isAdultContent = isAdultContent;
        
        return res.json(result);
      } catch (error) {
        return res.status(400).json({ error: 'Không thể lấy thông tin từ web' });
      }
    });
  } catch (error) {
    return res.status(400).json({ error: 'Không tìm thấy Url! Vui lòng nhập Url để check domain' });
  }
};