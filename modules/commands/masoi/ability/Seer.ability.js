const {Party} = require('../enum');
const Format = require('../format');
const Ability = require('./Ability');

module.exports = class Seer extends Ability {
  static question(player) {
    return (
      '• Bạn muốn soi ai trong danh sách:\n' + player.world.game.listPlayer()
    );
  }

  static check(player, value) {
    const index = player.format(value, Format.validIndex, Format.notSelf);
    player.sendMessage(
      `• Bạn đã chọn xem phe của người chơi ${player.world.items[index].name}!`
    );
    return index;
  }

  static async nightend(player, index, listDeaths) {
      if (index == null) return;

      var target = player.world.items[index];
      var party = target.party;
      if (target.constructor.name == 'Lycan') party = 4;
      if (target.constructor.name == 'Minion') party = 2;
      for (let partyName in Party) {
          if (Party[partyName] != party) continue;
          await player.sendMessage(`Phe của ${target.name} là /${partyName}/`);
          break;
      }
  }
};
