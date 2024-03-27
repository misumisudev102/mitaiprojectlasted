const {Data} = require('./constant');
const {State, Party} = require('./enum');
const Role = require('./role');
const World = require('./world');
const {gameConfig, dataSetup, symbols, guide, vietsub} = require('./helper');
const StateManager = require('./State')

const {sendMessage} = global.client.api
const prefix = global.config.PREFIX
const Game = require('./Game')
const gameManager = require('./GameManager')
const shuffle = arr => {
  // thuật toán bogo-sort
  let count = arr.length,
    temp,
    index;

  while (count > 0) {
    index = Math.floor(Math.random() * count);
    count--;
    temp = arr[count];
    arr[count] = arr[index];
    arr[index] = temp;
  }

  return arr; //Bogosort with no điều kiện dừng
};
const asyncWait = async time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
module.exports = class MasoiGame extends Game {
  constructor(options = {}) {
    super({
      ...options,
      ...{
        name: 'Ma Sói'
      }
    });
    if (!this.isGroup)
      return
    if(options.param[0] == 'info') {
      let indexVillage = Number(options.param[1]) - 1;
      if(!options.param[1]) return sendMessage(`Lệnh: ${prefix}masoi info [Mã làng]`, this.threadID);
      if (!gameConfig.setups[indexVillage]) return sendMessage(`Không tìm thấy làng với mã số ${symbols[options.param[0]]}!`, this.threadID);	
      let msg = 'Thông tin các nhân vật trong làng:\n'
      for(let i in gameConfig.setups[indexVillage].roles) {
        if(gameConfig.setups[indexVillage].roles[i] == 0) continue
        msg += `${vietsub(i)}: ${gameConfig.setups[indexVillage].roles[i]} người\n`
      }
      return sendMessage(msg, this.threadID)
    }
    const indexVillage = Number(options.param[0]) - 1;
    if (!options.param[0] || isNaN(indexVillage)) {
            var body = `📖 Hướng dẫn tạo: ${prefix}masoi [Mã làng]\n` +
            'Danh sách mã làng hiện có: \n' +
            gameConfig.setups.map((setup, index) => {
                const {name, roles} = dataSetup(setup);
                return `${symbols[index + 1]}. ${name} (${roles.length} người)\n`;
            })
            body += `Xem chi tiết các nhân vật có trong làng: ${prefix}masoi info [Mã làng]`
            return sendMessage(body.replace(/,/g, ""), this.threadID);
        }

    if (!gameConfig.setups[indexVillage]) {
            return sendMessage(`Không tìm thấy làng với mã số ${symbols[options.param[0]]}!`, this.threadID);
        }
    this.setup = dataSetup(gameConfig.setups[indexVillage]);
    this.state = new StateManager([State.SETUP, State.PLAY]);
    this.world = new World.Normal({
      game: this
    });

    this.sendMessage(
        '[====🐺GAME MA SÓI🐺====]\n' +
        `🛡 Làng: ${this.setup.name}\n` +
        `💎 Số lượng: ${this.setup.roles.length}\n` +
        `💬 Nhắn "${gameConfig.ready}" để vào game \n` +
        `	• Nếu muốn kết thúc game thì nhắn "end!"\n	• Nếu muốn rời khỏi game thì nhắn "out!"\n` +
        `🔴 Số người sẵn sàng: 1/${this.setup.roles.length}`
    );
  }

  async clean() {
    await super.clean();
    if (this.world.isEnd) return;
    this.world.endGame();
    for (const player of this.world.items) {
      player.resolve([null, null]);
    }
  }

  // ---------------------------------------------------------------------------

  async onMessage(message, reply) {
    await super.onMessage(message, reply);
    if (message.body.toLowerCase() == 'end!') {
      if (message.senderID == this.masterID) {
        await global.gameManager.clean(this.threadID);
        if (this.state.getCurrent() == State.SETUP)
          await reply('🛠 Đã kết thúc game thành công!');
      } else {
        await reply('⚠️ Chỉ có người tạo mới có thể kết thúc game!');
      }
    }
    if (message.body.toLowerCase() == 'out!') {
      if(!this.participants.includes(message.senderID)) 
        return await this.sendMessage(`⚠️ Bạn chưa tham gia game nên không thể out!\n 	• Tình trạng game hiện tại: ${this.participants.length}/${this.setup.roles.length}!`);
      if(message.senderID == this.masterID) 
        return await this.sendMessage(`⚠️ Bạn là chủ phòng nên không thể rời khỏi!`)
      const index = this.participants.findIndex(i => i == message.senderID)
      this.participants.splice(index, 1)
      await this.sendMessage(`✈️ Bạn đã out game thành công!\n 	• Tình trạng game hiện tại: ${this.participants.length}/${this.setup.roles.length}!`);
    }
    const curState = this.state.getCurrent();
    switch (curState) {
    case State.SETUP:
      await this.stateSetup(message, reply);
      break;
    case State.PLAY:
      if (this.participants.includes(message.senderID))
        await this.statePlay(message, reply);
      break;
    }
  }

  //  ____ _____  _  _____ _____
  // / ___|_   _|/ \|_   _| ____|
  // \___ \ | | / _ \ | | |  _|
  //  ___) || |/ ___ \| | | |___
  // |____/ |_/_/   \_\_| |_____|

  async stateSetup(message) {
    if(message.body.toLowerCase() == gameConfig.ready && this.participants.includes(message.senderID)) {
      await this.sendMessage(`⚠️ Bạn đã tham gia trước đó!\n 	• Tình trạng game hiện tại: ${this.participants.length}/${this.setup.roles.length}!`);
    }
    if (message.body.toLowerCase() == gameConfig.ready && this.participants.length < this.setup.roles.length && !this.participants.includes(message.senderID)) {
      this.participants.push(message.senderID);
      if (this.participants.length == this.setup.roles.length) {
        this.state.next();
        shuffle(this.setup.roles);
        for (let i = 0; i < this.participants.length; i++) {
          const participantID = this.participants[i];
          const { name } =  await global.Users.getData(participantID);
          const player = this.world.add(
            new Role[this.setup.roles[i]]({
              index: this.world.items.length,
              world: this.world,
              name: name || '<Chưa kết bạn>',
              threadID: participantID
            })
          );
          this.sendMessage(guide(player), player.threadID);
        }
        const werewolfParty = this.world.items.filter(
          e => e.party == Party.WEREWOLF
        );
        const nameMap = werewolfParty.map(e => e.name);
        for (const player of werewolfParty) {
          if (nameMap.length > 1)
            await player.sendMessage(
              `Những người cùng phe với bạn là: ${nameMap
                .filter(name => name != player.name)
                .join(
                  ', '
                )}\n Hãy liên hệ với họ để có 1 teamwork tốt nhất nhé!`
            );
        }
        let balanceScore = 0;
        for (const role of this.setup.roles) {
          balanceScore += Data[role].score;
        }
        this.sendMessage(
          this.timing({
            message:
              `⚖ Điểm cân bằng: ${balanceScore}\n` +
              '📖 Danh sách lệnh (không cần prefix):\n===GROUP===\n1."help": Xem role của mình!\n2."status": Tình trạng các người chơi còn sống\n===PRIVATE===\n1."pass": Bỏ qua lượt\n' +
              '\nHãy xem kĩ chi tiết role của mình, trò chơi bắt đầu sau',
            time: gameConfig.timeout.DELAY_STARTGAME,
            left: false
          })
        );
        await asyncWait(gameConfig.timeout.DELAY_STARTGAME);
        this.world.startLoop();
      } else {
        await this.sendMessage(`⌛️ Tình trạng: ${this.participants.length}/${this.setup.roles.length}!`);
      }
    }
  }

  async statePlay(message, reply) {
    if (message.body.toLowerCase() != 'end!') {
      const player = this.world.find({threadID: message.senderID});
      switch (message.body.toLowerCase()) {
      case 'help':
        await this.sendMessage(guide(player), message.senderID);
        break;
      case 'status':
        await this.sendStatus(message.threadID);
        break;
      }
      if (!message.isGroup)
        this.world.find({threadID: message.senderID}).onMessage(message, reply);
    }
  }

  //  _   _ _____ ___ _
  // | | | |_   _|_ _| |
  // | | | | | |  | || |
  // | |_| | | |  | || |___
  //  \___/  |_| |___|_____|

  async sendMessage(message, threadID = this.threadID) {
    await sendMessage(message, threadID);
  }

  timing({message = '', time = 0, left = true} = {}) {
    if (time < 0) time = 0;
    const hh = Math.floor(time / 1000 / 60 / 60);
    const mm = Math.floor((time - hh * 60 * 60 * 1000) / 1000 / 60);
    const ss = Math.ceil((time - hh * 60 * 60 * 1000 - mm * 60 * 1000) / 1000);
    let text = `${ss}s`;
    if (mm > 0) text = `${mm}m ${text}`;
    if (hh > 0) text = `${hh}h ${text}`;
    return left ? `[${text}] ${message}` : `${message} [${text}]`;
  }

  //  	____ _   _    _  _____
  //  / ___| | | |  / \|_   _|
  // | |   | |_| | / _ \ | |
  // | |___|  _  |/ ___ \| |
  //  \____|_| |_/_/   \_\_|

  listPlayer(filter = {}) {
    let text = '';
    for (let index = 0; index < this.world.getLength(); index++) {
      const player = this.world.items[index];

      let pass = true;
      for (const key in filter) {
        if (player[key] !== filter[key]) {
          pass = false;
          break;
        }
      }

      if (pass)
        text += `${symbols[index + 1]} ${player.name} ${
          player.died ? ' - đã chết' : ''
        }\n`;
    }
    return text;
  }

  async sendStatus(threadID = this.threadID) {
    await this.sendMessage(
      `🛠 Tình trạng game:\n${this.listPlayer({died: false})}`,
      threadID
    );
  }
};
