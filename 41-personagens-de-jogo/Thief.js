const Character = require("./Character")

class Thief extends Character {
  attack(target) {
    target.lifePoints -= (this.attackPoints - target.defensePoints) * 2
  }

}

module.exports = Thief