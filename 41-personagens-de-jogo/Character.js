class Character {
  constructor(name, lifePoints, attackPoints, defensePoints) {
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  attack(target) {
    target.lifePoints -= this.attackPoints - target.defensePoints
  }
}

module.exports = Character