module.exports.config = {
    name: 'auto',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'admin',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '11:00:00 PM',
    message: ['Chúc mọi người ngủ ngon😴', 'Khuya rùi ngủ ngon nhé các bạn😇']
},
{
    timer: '1:00:00 PM',
    message: ['Chúc mọi người buổi chiều vui vẻ🙌', 'Chúc mọi người buổi chiều đầy năng lượng😼']
},
{
    timer: '6:00:00 AM',
    message: ['Chúc mọi người buổi sáng vui vẻ😉', 'Buổi sáng đầy năng lượng nhaa các bạn😙', 'Chúc mn buổi sáng vui vẻ ❤️']
},
{
    timer: '10:00:00 PM',
    message: ['Chúc mọi người địt nhau với người yêu vui vẻ']
},
  {
    timer: '12:00:00 PM',
    message: ['Chúc mọi người buổi trưa vui vẻ😋', 'Chúc mọi người bữa trưa ngon miệng😋']
},           
      {
    timer: '11:00:00 AM',
    message: ['Cả sáng mệt mỏi rùi nghỉ ngơi nạp năng lượng nào!!😴']
},               
   {
    timer: '10:00:00 AM',
    message: ['Nấu cơm nhớ bật nút nha mọi người 😙']
},          
{
    timer: '5:00:00 PM',
    message: ['Chúc mọi người buổi chiều tà vui vẻ🥰']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};