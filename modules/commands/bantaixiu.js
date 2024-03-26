module.exports.config = {
  name: "bantaixiu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DuyVuongUwU",
  description: "tài xỉu nhưng nó là nhiều người??",
  commandCategory: "Game",
  usages: "[new/leave/start/end]",
  cooldowns: 5
};
module.exports.languages = {
    "vi": {
        "moneyEror": "⚠ Số tiền cược không phải là một con số hơp lệ!",
        "moneyMin": "⚠ Số tiền cược phải lớn hơn hoặc bằng 50$!!",
        "moneyDeCreate": "⚠ Bạn không có đủ %1 $ để tạo bàn game mới!!",
        "gameCreated": "⚠ Nhóm này đã được mở bàn game!",
        "createSuccess": "🥳 Đã tạo thành công bàn chơi game!\n=> Số tiền cược: %1$\n=> Số thành viên tham gia: 1 thành viên\n=> Nếu muốn bắt đầu bàn game vui lòng ghi %2 start\n=> Nếu muốn kết thúc bàn game vui lòng ghi %3 end\n=> Tham gia nhóm game này vui lòng ghi %4 join",
        "notCreatedYet": "⚠ Nhóm này hiện chưa có bàn game nào!\n=> Vui lòng hãy tạo bàn game mới để tham gia!",
        "gameStarted": "⚠ Hiện tại bàn game này đã bắt đầu từ trước!",
        "moneyDeJoin": "⚠ Bạn không có đủ %1$ để tham gia bàn game này!",
        "joined": "⚠ Hiện tại bạn đã tham gia bàn game này!",
        "joinSuccess": "🥳 Bạn đã tham gia bàn game!\n=> Số thành viên hiện tại là %1 thành viên",
        "userNotInGame": "⚠ Bạn đã không có trong bàn game để rời!",
        "leaveFail": "⚠ Bàn game đã được bắt đầu không thể rời!",
        "leaveSuccess": "🥺 Bạn đã rời khỏi bàn game của nhóm!",
        "countPlayer": "🥺 %1 đã rời khỏi bàn game!\n=> Hiện tại bàn game còn %2 thành viên",
        "authorLeave": "🥺 %1 đã rời khỏi bàn game, bàn game của nhóm đã được giải tán!",
        "startFail": "⚠ Bạn không phải là người tạo ra bàn game này nên không thể bắt đầu game",
        "notEnoughMembers": "⚠ Bàn game của bạn không có đủ thành viên để có thể bắt đầu!",
        "startPlaying": "🔊 GAME START: \n-> Xin mời %1 người chơi nhắn 'tài' hoặc 'xỉu'(Lưu ý: nhắn ở trong group này!!!)",
        "endFail": "⚠ Bạn không phải là người tạo ra bàn game nên không thể xóa bàn game",
        "endSuccess": "🎆 Đã xóa bàn game!",
        "tutorial": "⚠ BODY:\n- create/new/-c: Tạo bàn chơi tài xỉu\n- join/-j: Tham gia vào bàn tài xỉu\n- leave/-l: Rời khỏi bàn tài xỉu\n- start/-s: Bắt đầu bàn tài xỉu\n- end/-e: Kết thúc bàn tài xỉu",
        "error": "⚠ ERROR MODULE TAIXIU %1"
    },
    "en": {
        "moneyEror": "⚠ The bet amount is not a valid number!",
        "moneyMin": "⚠ Bet amount must be greater than or equal to 50$!!",
        "moneyDeCreate": "⚠ You don't have enough %1 $ to create a new game table!!",
        "gameCreated": "⚠ This group has been opened to the game table!",
        "createSuccess": "🥳 Successfully created a gaming table!\n=> Bet amount: %1$\n=> Number of members participating: 1 member\n=> If you want to start the game, please write %2 start\n=> If you want to end the game, please write %3 end\n=> Join this game group please write %4 join",
        "notCreatedYet": "⚠ This group currently does not have any tables!\n=> Please create a new game table to join!",
        "gameStarted": "⚠ This game table has already started!",
        "moneyDeJoin": "⚠ You don't have enough %1$ to join this game table!",
        "joined": "⚠You have now joined this game table!",
        "joinSuccess": "🥳 You have joined the game table!\n=> Current membership is %1 member",
        "userNotInGame": "⚠ You were not in the game table to leave!",
        "leaveFail": "⚠ The game table has been started and can't be left!",
        "leaveSuccess": "🥺 You have left the group game table!",
        "countPlayer": "🥺 %1 has left the game table!\n=> The game table is still available %2 member",
        "authorLeave": "🥺 %1 has left the game table, the group's game table has been disbanded!",
        "startFail": "⚠ You are not the creator of this game board, so you cannot start the game",
        "notEnoughMembers": "⚠ Your game board doesn't have enough members to start!",
        "startPlaying": "🔊 GAME START: \n-> Please %1 Players text 'tài' or 'xỉu' (Note: the message is in this group!!!)",
        "endFail": "⚠ You are not the creator of the game board, so you cannot delete the game table",
        "endSuccess": "🎆 Removed the game board!",
        "tutorial": "⚠ BODY:\n- create/new/-c: Create a poker table\n- join/-j: Join the poker table\n- leave/-l: Get off the table\n- start/-s: Let's start the table of fainting\n- end/-e: The end of the table of fainting",
        "error": "⚠ ERROR MODULE TAIXIU %1"
    }
}
module.exports.handleEvent = async function({ api, event, Currencies }) {
  const { threadID, messageID, body, senderID } = event;
  const typ = ['tài', 'xỉu'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
  if (!body) return;
  if (body.toLowerCase() == 'tài' || body.toLowerCase() == 'xỉu') {
    if(!global.taixiuS) return
    const gameThread = global.taixiuS.get(threadID) || {};
    if (!gameThread) return;
    if(gameThread.start != true) return;
    else {
      var playerGame = gameThread.player.length
      if (!gameThread.player.find(i => i.userID == senderID)) return;
      else {
        var s, q;
        var s = gameThread.player.findIndex(i => i.userID == senderID);
        var q = gameThread.player[s];
        if (q.choose.status == true) return api.sendMessage('⚠ Bạn đã chọn rồi không thể chọn lại!', threadID, messageID);
        else {
          if (body.toLowerCase() == 'tài') {
            gameThread.player.splice(s, 1);
            gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'tài' } });
            api.sendMessage('👤 Người chơi ' + q.name + ' đã chọn TÀI!!', threadID, messageID);
          }
          else {
            gameThread.player.splice(s, 1);
            gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'xỉu' } });
            api.sendMessage('👤 Người chơi ' + q.name + ' đã chọn XỈU!!', threadID, messageID);
          }
          var vv = 0,
              vvv = gameThread.player.length;
          for (var c of gameThread.player) {
            if (c.choose.status == true) vv++;
          }
          if (vv == vvv) {
            api.sendMessage('🥳Đang lắc....', threadID, (err, data) => {
              if (err) return api.sendMessage(err, threadID, messageID);
              setTimeout(async function () {
                api.unsendMessage(data.messageID);
                  var ketqua = random
                  var win = [];
                  var lose = [];
                  if (ketqua.indexOf('tài') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'tài') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
                  }
                  else {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'xỉu') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
                  }
                  var msg = '💎 KẾT QUẢ: ' + ketqua.toUpperCase() + '\n\n🥳 Những người chiến thắng:\n';
                  var dem_win = 0;
                  var dem_lose = 0;
                  var winCount = 0;
                  for (var w of win) {
                    var data_money = (await Currencies.getData(w.userID));
                    data_money.money = data_money.money + ((gameThread.money * parseInt(playerGame))/parseInt(winCount)).toFixed(0);
                    await Currencies.setData(w.userID, { data: data_money });
                    dem_win++;
                    winCount = winCount + 1
                    msg += dem_win + '. ' + w.name + '\n';
                  }
                  for (var l of lose) {
                    var data_money = (await Currencies.getData(l.userID));
                    data_money.money = data_money.money - parseInt(gameThread.money);
                    await Currencies.setData(l.userID, { data: data_money });
                    if (dem_lose == 0) {
                      msg += '\n🥺 Những người thua trong ván này:\n';
                    }
                    dem_lose++;
                    msg += dem_lose + '. ' + l.name + '\n';
                  }
                  msg += '\n🎁 Những người thắng nhận được [ ' + ((gameThread.money * parseInt(playerGame))/parseInt(winCount)).toFixed(0) + '$ ]\n';
                  msg += '💰 Những người thua bị trừ [' + gameThread.money + '$ ]';
                  global.taixiuS.delete(threadID);
                  return api.sendMessage(msg, threadID);
              }, 5000);
            });
          }
          else return;
        }
      }
    }
  }
}
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, getText }) {
  try {
    if (!global.taixiuS) global.taixiuS = new Map();
    const { threadID, messageID, senderID } = event;
    var gameThread = global.taixiuS.get(threadID);
    switch (args[0]) {
      case "create":
      case "new":
      case "-c": {
        if (!args[1] || isNaN(args[1])) return api.sendMessage(getText("moneyEror"), threadID, messageID);
        if (parseInt(args[1]) < 50) return api.sendMessage(getText("moneyMin"), threadID, messageID);
        var check = await checkMoney(senderID, args[1]);
        if (check == false) return api.sendMessage(getText("moneyDeCreate", args[1]), threadID, messageID);
        if (global.taixiuS.has(threadID)) return api.sendMessage(getText("gameCreated"), threadID, messageID);
        var name = await Users.getNameUser(senderID);
        global.taixiuS.set(threadID, { box: threadID, start: false, author: senderID, player: [{ name, userID: senderID, choose: { status: false, msg: null } }], money: parseInt(args[1]) });
        return api.sendMessage(getText("createSuccess", parseInt(args[1]), global.config['PREFIX'] + this.config.name, global.config['PREFIX'] + this.config.name, global.config['PREFIX'] + this.config.name), threadID);
        break;    
      }
      case "join":
      case "-j": {
        if (!global.taixiuS.has(threadID)) return api.sendMessage(getText("notCreatedYet"), threadID, messageID);
        if (gameThread.start == true) return api.sendMessage(getText("gameStarted"), threadID, messageID);
        var check = await checkMoney(senderID, gameThread.money);
        if (check == false) return api.sendMessage(getText("moneyDeJoin", gameThread.money), threadID, messageID);
        if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage(getText("joined"), threadID, messageID);
        var name = await Users.getNameUser(senderID);
        gameThread.player.push({ name, userID: senderID, choose: { stats: false, msg: null } });
        global.taixiuS.set(threadID, gameThread);
        return api.sendMessage(getText("joinSuccess", gameThread.player.length), threadID, messageID);
        break;    
      }
      case "leave":
      case "-l'": {
        if (!global.taixiuS.has(threadID)) return api.sendMessage(getText("notCreatedYet"), threadID, messageID);
        if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage(getText("userNotInGame"), threadID, messageID);
        if (gameThread.start == true) return api.sendMessage(getText("leaveFail"), threadID, messageID);
        if (gameThread.author == senderID) {
          global.taixiuS.delete(threadID);
          var name = await Users.getNameUser(senderID);
          return api.sendMessage(getText("leaveFail", name), threadID, messageID);
        }
        else {
          gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);
          global.taixiuS.set(threadID, gameThread);
          var name = await Users.getNameUser(senderID);
          api.sendMessage(getText("leaveSuccess"), threadID, messageID);
          return api.sendMessage(getText("countPlayer", name, gameThread.player.length), threadID);
        }
        break;    
      }
      case "start":
      case "-s": {
        if (!gameThread) return api.sendMessage(getText("notCreatedYet"), threadID, messageID);
        if (gameThread.author != senderID) return api.sendMessage(getText("startFail"), threadID, messageID);
        if (gameThread.player.length <= 1) return api.sendMessage(getText("notEnoughMembers"), threadID, messageID);
        if (gameThread.start == true) return api.sendMessage(getText("gameStarted"), threadID, messageID);
        gameThread.start = true;
        global.taixiuS.set(threadID, gameThread);
        return api.sendMessage(getText("startPlaying", gameThread.player.length), threadID);
        break;    
      } 
      case "end":
      case "-e": {
        if (!gameThread) return api.sendMessage(getText("notCreatedYet"), threadID, messageID);
        if (gameThread.author != senderID) return api.sendMessage(getText("endFail"), threadID, messageID);
        global.taixiuS.delete(threadID);
        return api.sendMessage(getText("endSuccess"), threadID, messageID);
        break;    
      }
     default: {
        return api.sendMessage(getText("tutorial"), threadID, messageID);
      }
    }
  }
  catch (err) {
    return api.sendMessage(getText("error", err), event.threadID, event.messageID);
  }
  async function checkMoney(senderID, maxMoney) {
    var i, w;
    i = (await Currencies.getData(senderID)) || {};
    w = i.money || 0
    if (w < parseInt(maxMoney)) return false;
    else return true;
  }
}