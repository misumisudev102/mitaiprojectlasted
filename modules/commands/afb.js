const axios = require('axios');
const fs = require('fs');

const isURL = u => /^http(|s):\/\//.test(u);

exports.handleEvent = async function(o) {
    try {
        const str = o.event.body;
        const send = msg => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);
        const head = app => `==『 AUTODOWN ${app.toUpperCase()} 』==\n────────────────`;
     // const head = app => '';

        if (isURL(str)) {
            if (/fb|facebook/.test(str)) {
                const json = await infoPostFb(str);
                const body = `${head('FACEBOOK')}\n- Tiêu Đề: ${json.message}`;
                const fil = type => json.attachment.filter($=>$.__typename == type);
                const photo = fil('Photo');
                const video = fil('Video');

                const attachment = [];
                for (const i of photo) {
                    try {
                        const img = i.photo_image || i.image || {};
                        attachment.push(await streamURL(img.uri, 'jpg'));
                    } catch {
                        continue;
                    }
                }
                if (attachment.length > 0) {
                    await send({
                        body, attachment
                    });
                }

                for (const i of video) {
                    try {
                        send({
                            body, attachment: await streamURL(i.browser_native_hd_url || i.browser_native_sd_url, 'mp4'),
                        });
                    } catch {
                        continue;
                    }
                }
            } 
      /* TỰ ĐỘNG TẢI ẢNH HOẶC VIDEO TIKTOK */ 
      else if (/(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//.test(str)) {
                const json = await infoPostTT(str);
                let attachment = [];
                if (json.images != undefined) {
                    for (const $ of json.images) {
                        attachment.push(await streamURL($, 'png'));
                    }
                } else {
                    attachment = await streamURL(json.play, 'mp4');
                }

                send({
                    body: `${head('TIKTOK')}\nAuthor: ${json.author.nickname}\nTiêu Đề : ${json.title}`, attachment
                });
                    } 
      /* TỰ ĐỘNG TẢI ẢNH HOẶC VIDEO YOUTUBE */ 
      else if (/(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//.test(str)) {
                const res = await axios.get(`https://phungtuanhai.site/youtube/download?apikey=PTH&id=${str}`);
                send({
                    body: `\n[💬] → title: ${res.data.data.title}\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘃𝗶𝗱𝗲𝗼: ${res.data.data.duration}`, attachment: await streamURL(res.data.data.video.url, 'mp4')});
            } 
      /* TỰ ĐỘNG TẢI ẢNH HOẶC VIDEO IBB */ 
      else if (/ibb\.co/.test(str)) {
         send({body: `${head('IMGBB')}\n`,attachment: await streamURL(str, str.split('.').pop()) })
              }
      /*AUTODOWN CAPCUT VIIDEO */
      else if (/capcut\.com/.test(str)) {
                var res = (await axios.get(`https://api-0703.0703-opa.repl.co/capcut?url=${str}`))
const title = res.data.title;
const description = res.data.description;
const usage = res.data.usage;
const link = res.data.videoUrl;
const stream = (await axios.get(link,{responseType: "arraybuffer"})).data 
/*const path = __dirname+`/cache/1.mp4`;
fs.writeFileSync(path, Buffer.from(stream, "utf-8"));
return o.api.sendMessage({body: `📸==== [ 𝗖𝗔𝗣𝗖𝗨𝗧 ] ====📸
━━━━━━━━━━━━━━━━━━━

📝 𝗧𝗶𝘁𝗹𝗲: ${title}
😻 𝗠𝗼̂ 𝘁𝗮̉: ${description}
🌸 𝗟𝘂̛𝗼̛̣𝘁 𝗱𝘂̀𝗻𝗴: ${usage}
🧸 𝗟𝗶𝗻𝗸 𝗰𝗮𝗽𝗰𝘂𝘁: ${text}
🔗 𝗟𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼: ${link}

👉 𝗕𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗲𝗱𝗶𝘁 𝘃𝗶𝗱𝗲𝗼 𝘁𝗵𝗶̀ 𝗮̂́𝗻 𝘃𝗼̂ 𝗹𝗶𝗻𝗸 𝗰𝗮𝗽𝗰𝘂𝘁 𝗼̛̉ 𝘁𝗿𝗲̂𝗻 đ𝗲̂̉ 𝗲𝗱𝗶𝘁 𝗻𝗵𝗮́`, attachment: fs.createReadStream(path)},o.event.threadID,() => fs.unlinkSync(path),o.event.messageID)*/
             send({body: `${head('CAPCUT')}\n→ Tiêu Đề: ${title}\n→ Description : ${description}\n→ Lượt Xem : ${usage}\n`,attachment: await streamURL(link, 'mp4')})     
                }
      /* TỰ ĐỘNG TẢI ẢNH, VIDEO, AUDIO CỦA FILE CATBOX*/ 
      else if(/catbox\.moe/.test(str)){
      send({body: `${head('FILE-CATBOX')}\n`,attachment: await streamURL(str, str.split('.').pop()) })
  }
      /* TỰ ĐỘNG TẢI ẢNH HOẶC NHẠC SOUNDCLOUD */ 
      else if(/soundcloud\.com/.test(str)){
       var res = (await axios.get(`https://phungtuanhai.site/soundcloud/dl?apikey=PTH&url=${str}`))
         const stream = (await axios.get(res.data.result.download, { responseType: "arraybuffer"})).data
                    const path = __dirname+`/cache/1.mp3`;
                    fs.writeFileSync(path, Buffer.from(stream, "utf-8"));
       o.api.sendMessage({body: `${head('SOUNDCLOUD')}\n→ title: ${res.data.result.title}\n\n→ quality: ${res.data.result.quality}\n\n→ duration: ${res.data.result.duration}\n\n→ thumbnail: ${res.data.result.thumbnail}\n\n→ download: ${res.data.result.download}`, 
         attachment: fs.createReadStream(path)},o.event.threadID,() => fs.unlinkSync(path),o.event.messageID)
                  }
      /* TỰ ĐỘNG TẢI NHẠC ZINGMP3 */ 
      else if(/zingmp3\.vn/.test(str)){
                  /*  const stream = (await axios.get(`${global.config.LINK[5]}/zingmp3/download?apikey=PTH&link=${str}`, { responseType: "arraybuffer"})).data
                    const path = __dirname+`/cache/1.mp3`;
                    fs.writeFileSync(path, Buffer.from(stream, "utf-8"));
          o.api.sendMessage({ attachment: fs.createReadStream(path)},o.event.threadID,() => fs.unlinkSync(path),o.event.messageID)*/
          send({body: `${head('ZINGMP3')}\n`,attachment: await streamURL(`https://phungtuanhai.site/zingmp3/download?apikey=PTH&link=${str}`, 'mp3')})
        }
      /* TỰ ĐỘNG TẢI ẢNH HOẶC VIDEO PINTEREST */ 
      else if (/(^https:\/\/)((www)\.)?(pinterest|pin)*\.(com|it)\//.test(str)) {
                const res = await axios.get(`https://api.imgbb.com/1/upload?key=588779c93c7187148b4fa9b7e9815da9&image=${str}`);
                send({
                    body: `${head('PINTEREST')}\n- link: ${res.data.data.image.url}`, attachment: await streamURL(res.data.data.image.url, 'jpg')});
            } 
      /* TỰ ĐỘNG TẢI ẢNH HOẶC VIDEO INSTAGRAM */ 
      else if (/instagram\.com/.test(str)) {
                const res = await axios.get(`https://phungtuanhai.site/instagram/dlpost?apikey=PTH&url=${str}`);
                const {
                    videos = [{}],
                    images
                } = res.data;
                let attachment = [];

                if (videos[0] != undefined) {
                    attachment = await streamURL(videos[0], 'mp4');
                } else if (images != undefined) {
                    for (const $ of typeof images == 'string' ? [images]: images) {
                        attachment.push(await streamURL($, 'png'));
                    }
                }
                send({
                    body: `${head('INSTAGRAM')}\n Tiêu Đề: ${res.data.caption}`, attachment
                });
            }
        }

    } catch(e) {
        console.log('Error', e);
    }
};
exports.run = () => {};
exports.config = {
    name: 'atdo',
    version: '1',
    hasPermssion: 0,
    credits: 'Công Nam',
    description: '',
    commandCategory: 'Tiện Ích',
    usages: [],
    cooldowns: 1
};

function streamURL(url, type) {
    return axios.get(url, {
        responseType: 'arraybuffer'
    }).then(res => {
        const path = __dirname + `/cache/${Date.now()}.${type}`;
        fs.writeFileSync(path, res.data);
        setTimeout(p => fs.unlinkSync(p), 1000 * 60, path);
        return fs.createReadStream(path);
    });
}

function infoPostTT(url) {
    return axios({
        method: 'post',
        url: `https://tikwm.com/api/`,
        data: {
            url
        },
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.data.data);
}

function infoPostFb(url) {
    return axios.get(`https://duongkum999.codes/fb/info-post?url=${url}`).then(res => res.data);
}