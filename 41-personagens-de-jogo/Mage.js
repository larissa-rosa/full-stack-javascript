const Character = require("./Character");

class Mage extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, attackPoints, defensePoints, magicPoints)
    this.magicPoints = magicPoints
  }
  
  attack(target) {
    target.lifePoints -= (this.attackPoints + this.magicPoints) - target.defensePoints
  }

  heal(target) {
    target.lifePoints += this.magicPoints * 2
  }
}

module.exports = Mage

