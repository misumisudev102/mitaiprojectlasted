 module.exports.config = {
    name: "work",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "D-Jukie", 
    description: "Làm việc để có tiền, có làm thì mới có ăn",
    commandCategory: "game",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "Bạn đã làm việc rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins nhận được khi làm việc ít nhất 200
var coinscn = Math.floor(Math.random() * 401) + 2000; //random coins khi làm ở khu công nghiệp
var coinsdv = Math.floor(Math.random() * 801) + 3000; //random coins khi làm ở khu dịch vụ
var coinsmd = Math.floor(Math.random() * 401) + 2500; //random coins khi làm ở mỏ dầu
var coinsq = Math.floor(Math.random() * 601) + 2800; //random coins khi khai thác quặng
var coinsdd = Math.floor(Math.random() * 201) + 3200; //random coins khi đào đá
var coinsdd1 = Math.floor(Math.random() * 401) + 2400; //random coins khi đào đá
var coinsdaa = Math.floor(Math.random() * 701) + 4200; //random
var coinsdbb = Math.floor(Math.random() * 601) + 5200; //random
var coinsdcc = Math.floor(Math.random() * 501) + 1200; //random
var coinsdee = Math.floor(Math.random() * 301) + 2500; //random
var coinsdff = Math.floor(Math.random() * 201) + 2600; //random
var coinsdgg = Math.floor(Math.random() * 301) + 2700; //random
var coinsdhh = Math.floor(Math.random() * 501) + 2800; //random
var coinsdii = Math.floor(Math.random() * 701) + 2900; //random
var coinsdjj = Math.floor(Math.random() * 801) + 2300; //random
var coinsdkk = Math.floor(Math.random() * 801) + 2300; //random

 
//random công việc cần làm
var rdcn = ['tuyển dụng nhân viên', 'quản trị khách sạn', 'tại nhà máy điện', 'đầu bếp trong nhà hàng', 'công nhân']; //random công việc khi làm ở khu công nghiệp
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   
 
var rddv = ['sửa ống nước', 'sửa điều hòa cho hàng xóm', 'bán hàng đa cấp', 'phát tờ rơi', 'shipper', 'sửa máy vi tính', 'hướng dẫn viên du lịch', 'cho con bú']; //random công việc khi làm ở khu dịch vụ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 
 
var rdmd = ['kiếm được 13 thùng dầu', 'kiếm được 8 thùng', 'kiếm được 9 thùng dầu', 'kiếm được 8 thùng dầu', 'ăn cướp dầu ', 'lấy nước đổ vô dầu rồi bán']; //random công việc khi làm ở mỏ dầu
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 
 
var rdq = ['quặng sắt', 'quặng vàng', 'quặng than', 'quặng chì', 'quặng đồng ', 'quặng dầu']; //random công việc khi khai thác quặng
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 
 
var rddd = ['kim cương', 'vàng', 'than', 'ngọc lục bảo', 'sắt ', 'đá bình thường', 'lưu ly', 'đá xanh']; //random công việc khi đào đá
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 
 
var rddd1 = ['khách vip', 'khách quen', 'người lạ', 'thằng ngu tầm 23 tuổi', 'anh lạ mặt', 'khách quen', 'đại gia 92 tuổi', 'thằng nhóc 12 tuổi']; //random công việc khi đào đá
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];
 
var rddaa = ['sau này chịu khó cần cù,thì bù siêng năng chỉ có làm thì mới có ăn,còn cái loại không làm mà đòi có ăn thì ăn đb nhá..ăn cứ*..nhá']; //random công việc khi đào đá
var work7 = rddaa[Math.floor(Math.random() * rddaa.length)];
 
var rddbb = ['bán nhà', 'biệt thự', 'chung cư', 'ô tô', 'vàng']; //random công việc khi đào đá
var work8 = rddbb[Math.floor(Math.random() * rddbb.length)];
 
var rddcc = ['về cho má nấu canh chua', 'cùng ông hàng xóm', 'cùng bố']; //random công việc khi đào đá
var work9 = rddcc[Math.floor(Math.random() * rddcc.length)];
 
var rddee = ['đứng đường', 'thợ điện', 'ca sĩ', 'trapboiz', 'sờ cam']; //random công việc khi đào đá
var work10 = rddee[Math.floor(Math.random() * rddee.length)];
 
var rddff = ['cùng thằng nhóc 12 tuổi', 'với bạn thân', 'với thằng lớp trưởng']; //random công việc khi đào đá
var work11 = rddff[Math.floor(Math.random() * rddff.length)];
 
var rddgg = ['nyc', 'cô chủ nhiệm', 'lớp trưởng', 'qtv']; //random
var work12 = rddgg[Math.floor(Math.random() * rddgg.length)];
 
var rddhh = ['nyc', 'lớp trưởng', 'admin', 'người lạ']; //random
var work13 = rddhh[Math.floor(Math.random() * rddhh.length)];
 
var rddii = ['nhà hàng xóm', 'đại gia', 'thằng ăn mày', 'lớp trưởng']; //random
var work14 = rddii[Math.floor(Math.random() * rddii.length)];
 
var rddjj = ['đã hạ gục Faker', 'đấm to đầu Faker', 'vả vỡ mồm Faker', 'đấm túi bụi']; //random
var work15 = rddjj[Math.floor(Math.random() * rddjj.length)]; 

  var rddkk = ['chó', 'mèo', 'cá sấu', 'rắn', 'cá heo', 'cá mập', 'tắc kè', 'sư tử', 'cọp']; //random công việc chăm sóc động vật
var work16 = rddkk[Math.floor(Math.random() * rddkk.length)];

 
var msg = "";
    switch(handleReply.type) {
        case "choosee": {
 
            switch(event.body) {
                  case "1": msg = `Bạn đang làm việc ${work1} ở khu công nghiệp và kiếm được ${coinscn}$` ; Currencies.increaseMoney(event.senderID, coinscn); break;             
case "2": msg = `Bạn đang làm việc ${work2} ở khu dịch vụ và kiếm được ${coinsdv}$`; Currencies.increaseMoney(event.senderID, coinsdv); break;
case "3": msg = `Bạn ${work3} tại khu mở dầu và bán được ${coinsmd}$`; Currencies.increaseMoney(event.senderID, coinsmd); break;
case "4": msg = `Bạn đang khai thác ${work4} và kiếm được ${coinsq}$`; Currencies.increaseMoney(event.senderID, coinsq); break;
case "5": msg = `Bạn đào được ${work5} và kiếm được ${coinsdd}$` ; Currencies.increaseMoney(event.senderID, coinsdd); break;
case "6": msg = `Bạn được ${work6} cho ${coinsdd1}$ nếu xxx 1 đêm, thế là bạn đồng ý ngay :)))`; Currencies.increaseMoney(event.senderID, coinsdd1); break;
case "7": msg = `Bạn à ${work7} vì vậy số tiền bạn nhận được là ${coinsdaa}$ :>>` ; Currencies.increaseMoney(event.senderID, coinsdaa); break;
case "8": msg = `Bạn bán ${work8} và nhận được số tiền là  ${coinsdbb}$` ; Currencies.increaseMoney(event.senderID, coinsdbb); break;
case "9": msg = `Bạn đi câu cá ${work9} và được cho ${coinsdcc}$` ; Currencies.increaseMoney(event.senderID, coinsdcc); break;
case "10": msg = `Bạn ${work10} và kiếm được ${coinsdee}$` ; Currencies.increaseMoney(event.senderID, coinsdee); break;
case "11": msg = `Bạn đóng jav ${work11} và kiếm được ${coinsdff}$` ; Currencies.increaseMoney(event.senderID, coinsdff); break;
case "12": msg = `Bạn học hackfb ${work12} và kiếm được ${coinsdgg}$` ; Currencies.increaseMoney(event.senderID, coinsdgg); break;
case "13": msg = `Bạn gạ đ!t ${work13} và kiếm được ${coinsdhh}$` ; Currencies.increaseMoney(event.senderID, coinsdhh); break;
case "14": msg = `Bạn đi ăn cướp ${work14} và kiếm được ${coinsdii}$` ; Currencies.increaseMoney(event.senderID, coinsdii); break;
case "15": msg = `Bạn  ${work15} và kiếm được ${coinsdjj}$` ; Currencies.increaseMoney(event.senderID, coinsdjj); break;
case "16": msg = `Bạn đã hoàn thành việc chăm sóc con ${work16} và được chủ trả lương tổng là ${coinsdkk}$` ; Currencies.increaseMoney(event.senderID, coinsdkk); break;            
             case "17": msg = "Chưa update.............!"; break; //thêm case nếu muốn 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("Vui lòng nhập 1 con số!", event.threadID, event.messageID);
            if (choose > 17 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách!", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "Chưa update.......") {
                msg = "Update soon........";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
 
        });
 
     };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {
 
        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("====== KIẾM TIỀN MỖI NGÀY ======" +
                "\n\n1. Khu công nghiệp 🏗️" +
                "\n2. Khu dịch vụ 🏘️" +
                "\n3. Khu mỏ dầu 🏭" +
                "\n4. Khai thác quặng☣" +
                "\n5. Đào đá ⛰️" +
                "\n6. Đứng đường 🏪 :)))" +
                "\n7. Không làm mà cũng có ăn ara ara 🐸" +
                "\n8. Bán hàng đa cấp 🪄" +
                "\n9. Câu cá 🐳" +
                "\n10. ramdom bừa 1 công việc nào đó 🐧" +
                "\n11. đóng phim jav 🌚" + 
                "\n12. hack facebook 💢" + 
                "\n13. gạ đ!t 1 ai đó 🍑" +
                "\n14. đi cướp, đúng rồi cướp đó hãy làm cướp khi bạn quá nghèo 🔥" +
                "\n15. solo với Faker 😏" +
                "\n16. Chăm sóc động vật🏡" +                        
                "\n17. Update soon..." +
                "\n\n→ Hãy reply tin nhắn và chọn theo số " //thêm case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}