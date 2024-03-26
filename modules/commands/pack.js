module.exports.config = {
  name: "pack",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "đức tài",
  description: "check thông tin package",
  commandCategory: "tiện ích",
  usages: "pack + tên package cần tra",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const npmRegistryURL = 'https://registry.npmjs.org/';

  var packageName = args.join(" ");

  if (!packageName) {
    api.sendMessage(`Vui lòng nhập tên package cần tra!`, event.threadID, event.messageID);
    return;
  }

  async function getPackageInfo(packageName) {
    try {
      const response = await axios.get(`${npmRegistryURL}${packageName}`);
      const packageData = response.data;

      if (packageData.error) {
        api.sendMessage(`Package "${packageName}" không tồn tại trên npm.`);
        return;
      }

      const latestVersion = packageData['dist-tags'].latest;
      const versionData = packageData.versions[latestVersion];
      const publisher = versionData.maintainers[0];

      api.sendMessage(`
Package: ${packageName} ✅,
Tên Package: ${packageData.name},
Phiên Bản: ${latestVersion},
Thời Gian Publish Package: ${packageData.time[packageData['dist-tags'].latest]},
Tên Người Publish Package: ${publisher.name},
Email Người Publish: ${packageData.maintainers[0].email},
------------------------------
Link Source Package: ${packageData.bugs.url},
Trang Chủ: ${packageData.homepage},
Hỗ Trợ Các Dạng: ${packageData.keywords},
------------------------------
Dung Lượng Package: ${versionData.dist.unpackedSize},
Tổng File: ${versionData.dist.fileCount},
Publish Package Lần Cuối: ${packageData.time[latestVersion]}
------------------------------
DownLoad Source: ${packageData.repository.url},
Install Package: npm i ${packageName}`, event.threadID, event.messageID);

    } catch (error) {
      api.sendMessage(`Lỗi khi lấy thông tin về package ${packageName}.
  ------------------------------
  ${error.message}`);
    }
  }

  getPackageInfo(packageName);
};
