 var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
    module.exports.config = {
        name: "baucua",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Horizon Lucius Synthesis I",
        description: "Game bầu cua có đặt cược",
        commandCategory: "game",
        usages: "<[gà/tôm/bầu/cua/cá/nai] hoặc[🐓/🦞/🍐/🦀/🐬/🦌]> <Số tiền cược (lưu ý phải trên 100$)>",
        cooldowns: 2
    };

    module.exports.onLoad = async function () {
        if (!existsSync(__dirname + '/cache/ga.jpg')) {
            request('https://i.imgur.com/Vz17qhg.jpg').pipe(createWriteStream(__dirname + '/cache/ga.jpg'));
        }
        if (!existsSync(__dirname + '/cache/tom.jpg')) {
            request('https://i.imgur.com/Ep0MukF.jpg').pipe(createWriteStream(__dirname + '/cache/tom.jpg'));
        }
        if (!existsSync(__dirname + '/cache/bau.jpg')) {
            request('https://i.imgur.com/Qp3StfB.jpg').pipe(createWriteStream(__dirname + '/cache/bau.jpg'));
        }
        if (!existsSync(__dirname + '/cache/cua.jpg')) {
            request('https://i.imgur.com/J5MPPMW.jpg').pipe(createWriteStream(__dirname + '/cache/cua.jpg'));
        }
        if (!existsSync(__dirname + '/cache/ca.jpg')) {
            request('https://i.imgur.com/JNQr0qI.jpg').pipe(createWriteStream(__dirname + '/cache/ca.jpg'));
        }
        if (!existsSync(__dirname + '/cache/nai.jpg')) {
            request('https://i.imgur.com/UYhUZf8.jpg').pipe(createWriteStream(__dirname + '/cache/nai.jpg'));
        }
        if (!existsSync(__dirname + '/cache/baucua.gif')) {
            request('https://i.imgur.com/dlrQjRL.gif').pipe(createWriteStream(__dirname + '/cache/baucua.gif'));
        }
    };

    async function get(one,two,three) {
        var x1;
            switch (one) {
                case "ga": x1 = "🐓";
                    break;
                case "tom": x1 = '🦞';
                    break;
                case "bau": x1 = '🍐';
                    break;
                case "cua": x1 = '🦀';
                    break;
                case "ca": x1 = '🐬';
                    break;
                case "nai":x1 = '🦌';
            }
        var x2;
            switch (two) {
                case "ga": x2 = "🐓";
                    break;
                case "tom": x2 = '🦞';
                    break;
                case "bau": x2 = '🍐';
                    break;
                case "cua": x2 = '🦀';
                    break;
                case "ca": x2 = '🐬';
                    break;
                case "nai": x2 = '🦌';
            }
        var x3;
            switch (three) {
                case "ga": x3 = "🐓";
                    break;
                case "tom": x3 = '🦞';
                    break;
                case "bau": x3 = '🍐';
                    break;
                case "cua": x3 = '🦀';
                    break;
                case "ca": x3 = '🐬';
                    break;
                case "nai":x3 = '🦌';
            }
        var all = [x1, x2, x3];
    return full = all;
    }
var full = [];
    module.exports.run = async function({ api, event, args, Currencies }) { var out = (msg) => api.sendMessage(msg,event.threadID, event.messageID);
        const slotItems = ["ga", "tom", "bau", "cua", "ca", "nai"];
            const moneyUser = (await Currencies.getData(event.senderID)).money;
                var moneyBet = parseInt(args[1]);
                    if (!args[0] || !isNaN(args[0])) return api.sendMessage("[𝑷𝑮🐧] => Hãy Bấm : /baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
                    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[𝑷𝑮🐧] => Số tiền đặt cược không được để trống hoặc là số tiền âm", event.threadID, event.messageID);
                if (moneyBet > moneyUser) return api.sendMessage("[𝑩𝑶𝑻] => Số tiền bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
            if (moneyBet < 100) return api.sendMessage("[𝑩𝑶𝑻] => Số tiền đặt không được dưới 100 đô!", event.threadID, event.messageID);
        var number = [], win = false;
    for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
        var itemm;
            var icon;
                switch (args[0]) {
                    case "bầu":
                        case "Bầu": itemm = "bau";
                                icon = '🍐';
                            break;
                    case "cua": 
                        case "Cua": itemm = "cua";
                                icon = '🦀';
                            break;
                    case "cá":
                        case "Cá": itemm = "ca";
                                icon = '🐟';
                            break;
                    case "nai":
                        case "Nai": itemm = "nai";
                                icon = '🦌';
                            break;
                    case "gà": 
                        case "Gà": itemm = "ga";
                                icon = '🐓';
                            break;
                    case "tôm":
                        case "Tôm": itemm = "tom";
                                icon = '🦞';
                            break;
                                default: return api.sendMessage("[𝑩𝑶𝑻] => Hãy Bấm : /baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
                }      
                await get(number[0],number[1],number[2]);
            api.sendMessage({body:"🌺 𝑷𝒉𝒆́𝒑 𝑻𝒉𝒖𝒂̣̂𝒕 𝑾𝒊𝒏𝒙 𝑬𝒏𝑪𝒉𝒂𝒏𝑻𝒊𝒙...𝑪𝒉𝒐̛̀ 𝑩𝒐𝒕 𝑳𝒂̆́𝒄 𝑵𝒉𝒆́\n🌺 𝑪𝒉𝒖́𝒄 𝑩𝒂̣𝒏 𝑴𝒂𝒚 𝑴𝒂̆́𝒏...💝",attachment: createReadStream(__dirname + "/cache/baucua.gif")},event.threadID,async (error,info) => {
                await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                    api.unsendMessage(info.messageID);
                          await new Promise(resolve => setTimeout(resolve, 100));
    var array = [number[0],number[1],number[2]];
        var listimg = [];
           for (let string of array) {
               listimg.push(createReadStream(__dirname + `/cache/${string}.jpg`));
           }
        if (array.includes(itemm)) {
            var i = 0;
                if (array[0] == itemm) i+=1;
                    if (array[1] == itemm) i+=1;
                if (array[2] == itemm) i+=1;
            if (i == 1) {
                var mon = parseInt(args[1]) + 300;  
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s1")
                        return api.sendMessage({body:`➢ 𝑳𝒂̆́𝒄 𝑻𝒓𝒖́𝒏𝒈: ${full.join(" | ")}\n🌺𝑩𝒂̣𝒏 𝑻𝒉𝒂̆́𝒏𝒈 𝑳𝒐̛́𝒏 𝑽𝒂̀ 𝑵𝒉𝒂̣̂𝒏 𝑽𝒆̂̀ 𝑺𝒐̂́ 𝑻𝒊𝒆̂̀𝒏 ${mon}$ 💸\n➢ 𝑩𝒐𝒕 𝒍𝒂̆́𝒄 𝒓𝒂 𝒄𝒐́ 𝒎𝒐̣̂𝒕 𝒄𝒐𝒏 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 2) {
                var mon = parseInt(args[1]) * 2; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s2")
                        return api.sendMessage({body:`➢ 𝑳𝒂̆́𝒄 𝑻𝒓𝒖́𝒏𝒈: ${full.join(" | ")}\n🌺𝑩𝒂̣𝒏 𝑻𝒉𝒂̆́𝒏𝒈 𝑳𝒐̛́𝒏 𝑽𝒂̀ 𝑵𝒉𝒂̣̂𝒏 𝑽𝒆̂̀ 𝑺𝒐̂́ 𝑻𝒊𝒆̂̀𝒏 ${mon}$ 💸\n➢ 𝑩𝒐𝒕 𝒍𝒂̆́𝒄 𝒓𝒂 𝒄𝒐́ 𝒉𝒂𝒊 𝒄𝒐𝒏 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 3) {
                var mon = parseInt(args[1]) * 3; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log('s3')
                        return api.sendMessage({body:`➢ 𝑳𝒂̆́𝒄 𝑻𝒓𝒖́𝒏𝒈: ${full.join(" | ")}\n🌺𝑩𝒂̣𝒏 𝑻𝒉𝒂̆́𝒏𝒈 𝑳𝒐̛́𝒏 𝑽𝒂̀ 𝑵𝒉𝒂̣̂𝒏 𝑽𝒆̂̀ 𝑺𝒐̂́ 𝑻𝒊𝒆̂̀𝒏 ${mon}$ 💸\n➢ 𝑩𝒐𝒕 𝒍𝒂̆́𝒄 𝒓𝒂 𝒄𝒐́ 𝒃𝒂 𝒄𝒐𝒏 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else return api.sendMessage("[𝑩𝑶𝑻] => 𝑳𝒐̂̃𝒊 𝒓𝒐̂̀𝒊 𝒃𝒂̂̀𝒖 𝒄𝒖𝒂 𝒄𝒐𝒏 𝒄𝒂̣̆𝒄 𝒃𝒐̛́𝒕 𝒏𝒈𝒉𝒊𝒆̣̂𝒏 𝒍𝒂̣𝒊",event.threadID,event.messageID);
        } else  {
            await Currencies.decreaseMoney(event.senderID, parseInt(args[1])); console.log('s4')
            return api.sendMessage({body:`➢ 𝑳𝒂̆́𝒄 𝑻𝒓𝒖́𝒏𝒈: ${full.join(" | ")}\n🌺𝑩𝒂̣𝒏 𝑻𝒉𝒖𝒂 𝑹𝒐̂̀𝒊 𝑽𝒂̀ 𝑩𝒊̣ 𝑻𝒓𝒖̛̀ ${args[1]}$ 💸\n➢ 𝑽𝒊̀ 𝒏𝒉𝒂̀ 𝒄𝒂́𝒊 𝒍𝒂̆́𝒄 𝒓𝒂 𝒌𝒉𝒐̂𝒏𝒈 𝒄𝒐́ 𝒄𝒐𝒏 ${icon}`,attachment: listimg},event.threadID, event.messageID);
        }
            } ,event.messageID);
    };