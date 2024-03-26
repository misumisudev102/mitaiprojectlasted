module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "... - Long LTD",
    description: "War nát cái boxchat",
    commandCategory: "Kiến Thức War",
    usages: "war đậm chất",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Nghe bố mày chửi đây mấy thằng nhóc !");
setTimeout(() => {a({body: "Địt con đĩ mẹ mày lồn béo" })}, 3000);
setTimeout(() => {a({body: "Ngóng tai mà nghe bố nhà mày chửi mày đây"})}, 5000);
setTimeout(() => {a({body: "Trời đất dung hoa vạn vật sinh sôi" })}, 7000);
setTimeout(() => {a({body: "Con mẹ mày lôi thôi, đầu xanh mỏ đỏ" })}, 9000);
setTimeout(() => {a({body: "Khạc đờm tung toé, tao địt con mẹ mày như lồn trâu lồn chó" })}, 12000);
setTimeout(() => {a({body: "Mà tao địt con đĩ mẹ mày, đứng từ trên cao mà lao đầu xuống đất" })}, 15000);
setTimeout(() => {a({body: "Địt lất phất như mưa rơi mà địt tơi bời như bom đạn" })}, 17000);
setTimeout(() => {a({body: "Địt khoét cái lỗ sâu, địt khắp cái lỗ bướm" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Địt chai lỗ đít mà địt khít cái lỗ lồn" })}, 25000);
setTimeout(() => {a({body: "Tao địt con đĩ mẹ mày như gà mái mổ giun như chó càn cắn dậu" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Cho con mẹ mày nằm ngửa bửa nát cái tử cung" })}, 36000);
setTimeout(() => {a({body: "Khai thông buồng trứng mà hứng full tinh trùng" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con đĩ mẹ mày" })}, 70000);
setTimeout(() => {a({body: "Địt như mấy con phò bên hồ hoàn kiếm" })}, 75000);
setTimeout(() => {a({body: "Mà tao địt từ Nga mà qua tới Pháp" })}, 80000);
setTimeout(() => {a({body: "Và một trăm thằng da đỏ, một nghìn thằng da đen nó lại bem vào cái lỗ lồn của con đĩ mẹ mày" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn mày đã nghe bố war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại mày ở chương trình lần sau nha con đĩ tinh trùng khuyết tật mà thất bại của tạo hoá" })}, 105000);
setTimeout(() => {a({body: "Say Byeee 🥺"})} , 115000);




  
  }