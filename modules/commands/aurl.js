var configCommand = {
    name: 'autodow',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động tải xuống khi phát hiện liên kết',
    commandCategory: 'TIỆN ÍCH',
    usages: '[]',
    cooldowns: 3
},
axios = require('axios'),
downloader = require('image-downloader'),
fse = require('fs-extra'),
toolsFb = require('tools-fb'),
path = __dirname+'/cache/statusAuto.json';

async function streamURL(url, mime) {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};

function onLoad() {
    if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
};

async function noprefix(arg) {
    const s = JSON.parse(fse.readFileSync(path));
    if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
    if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID),
    arr = arg.event.args,
    regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
    regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
    regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/((story\.php|page\.\w+)(\?|\/))?(story_fbid=|\w+\/)/,
    regEx_instagram = /^\u0068\u0074\u0074\u0070\u0073\u003a\/\/(www\.)?instagram\.com\/(reel|p)\/\w+\/\w*/

    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
            const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;
            out({
                body: `=== 『 𝗧𝗜𝗞𝗧𝗢𝗞 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [📝] 𝗧𝗶𝗲̂𝘂 Đ𝗲̂̀: ${data.title}.\n→ [❤] 𝗟𝘂̛𝗼̛̣𝘁 𝗧𝗵𝗶́𝗰𝗵: ${data.digg_count}.\n→ [💬] 𝗟𝘂̛𝗼̛̣𝘁 𝗕𝗶̀𝗻𝗵 𝗟𝘂𝗮̣̂𝗻: ${data.comment_count}\n→ [🌟] 𝗟𝘂̛𝗼̛̣𝘁 𝗖𝗵𝗶𝗮 𝗦𝗲̉: ${data.share_count}\n→ [📥] 𝗟𝘂̛𝗼̛̣𝘁 𝗧𝗮̉𝗶: ${data.download_count}\n\n→ [💓] Đ𝐚̂𝘆 𝗹𝗮̀ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 📺\n→ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 🧸 đ𝗲̂̉ 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰.\n\n`, attachment: await streamURL(data.play, 'mp4')}, '', (err, dataMsg) => global.client.handleReaction.push({
                    name: configCommand.name, messageID: dataMsg.messageID, url: data.music
                })); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */

        /* TỰ DỘNG TẢI VIDEO YOUTUBE */
        if (regEx_youtube.test(el)) {
            const data = (await axios.get(`https://api.nambsls.repl.co/youtube/downloader?url=${el}`)).data.data,
            info = (a, b) => `=== 『 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [💬] 𝗧𝗶𝗲̂𝘂 Đ𝗲̂̀ 𝗩𝗶𝗱𝗲𝗼: ${a.title}\n→ [📺] 𝗧𝗵𝗼̛̀𝗶 𝗟𝘂̛𝗼̛̣𝗻𝗴 𝗖𝘂̉𝗮 𝗩𝗶𝗱𝗲𝗼: ${a.duration}\n\n→ Đ𝐚̂𝘆 𝗹𝗮̀ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘆𝗼𝘂𝘁𝘂𝗯𝗲 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝗹𝗶𝗻𝗸 🧸`;
            if (data.video.size < 26214400)out({
                body: (info(data, data.video.size))+'\n\n→ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 🧸 đ𝗲̂̉ 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰.'+`\n\n`, attachment: await streamURL(data.video.url, 'mp4')}, '', (err, datMsg) => global.client.handleReaction.push({
                    name: configCommand.name, messageID: datMsg.messageID, url: data.video.url
                })); else if (data.music.size < 26214400)out({
                body: (info(data))+`\n\n→ 𝗖𝗵𝘂́𝗰 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 𝗺𝗼̣̂𝘁 𝗻𝗴𝗮̀𝘆 𝗺𝗼̛́𝗶 𝘃𝘂𝗶 𝘃𝗲̉ 🧸`, attachment: await streamURL(data.music.url, 'mp3')});
        };
        /* END */

        /* TỰ ĐỘNG TẢI VIDEO FACEBOOK */
        if (regEx_facebook.test(el)) out({
            attachment: await streamURL((fdl = (await axios.get(`https://api.nambsls.repl.co/facebook/downloader?url=${el}`)).data.data, fdl.video.hd), 'mp4'), body: `=== 『 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [📖] 𝗧𝗶𝗲̂𝘂 Đ𝗲̂̀ 𝗩𝗶𝗱𝗲𝗼: ${fdl.title}\n→ Đ𝐚̂𝘆 𝗹𝗮̀ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝗹𝗶𝗻𝗸 📺\n→ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 🧸 đ𝗲̂̉ 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰.`
        }, '', (err, dataMsg) => global.client.handleReaction.push({
                name: configCommand.name, messageID: dataMsg.messageID, url: fdl.music.url
            }));
        /* END */

        if (regEx_instagram.test(el))out({
            attachment: await streamURL((idl = (await axios.get(`https://API-ThanhAli.thanhali.repl.co/instagram/downloadpost?url=${el}`)).data, idl[((irx = /\/p\//.test(el))?'display': 'video')+'_url']), irx?'jpg': 'mp4'), body: !irx?'→ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 🧸 đ𝗲̂̉ 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰.':''
        }, '', !irx?(err, dataMsg) => global.client.handleReaction.push({
                name: configCommand.name, messageID: dataMsg.messageID, url: idl.video_url
            }): '');
    };
};
async function reactionMsg(arg) {
  if(arg.event.reaction == '🧸'){
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d),
    _ = arg.handleReaction;
    if ('url'in _) out({
        body: `=== 『 𝗠𝗣𝟯 𝗗𝗢𝗪𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [🎶] 𝐀̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝘁𝘂̛̀ 𝘃𝗶𝗱𝗲𝗼\n→ [💓] Đ𝐚̂𝘆 𝗹𝗮̀ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗱𝗼𝘄𝗻 𝗺𝗽𝟯 𝗸𝗵𝗶 𝗯𝗮̣𝗻 𝘁𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 ( 🧸 ) 𝘃𝗮̀𝗼 𝘃𝗶𝗱𝗲𝗼`, attachment: await streamURL(_.url, 'mp3')}, '', '', _.messageID);
}
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    const data = JSON.parse(fse.readFileSync(path));
    s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean'||!!data[arg.event.threadID]?false: true;
    fse.writeFileSync(path, JSON.stringify(data, 0, 4));
    out((s?'→ 𝗯𝗮̣̂𝘁': '→ 𝘁𝗮̆́𝘁')+' '+configCommand.name);
};

module.exports = {
    config: configCommand,
    onLoad,
    run: runCommand,
    handleEvent: noprefix,
    handleReaction: reactionMsg
};