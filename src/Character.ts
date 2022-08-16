import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = Character.generateRandomNumber();
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.generateRandomNumber();
    this._defense = Character.generateRandomNumber();
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.generateRandomNumber(),
    };
  }

  static generateRandomNumber(): number {
    return Math.floor(Math.random() * (10 - 1) + 1);
  }

  // getters and setters

  get race() { return this._race; }
  get archetype() { return this._archetype; }

  get lifePoints() { return this._lifePoints; }

  get strength() { return this._strength; }

  get defense() { return this._defense; }

  get dexterity() { return this._dexterity; } 

  get energy() {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  // methods

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      const currentLife = this._lifePoints - damage;
      this._lifePoints = currentLife;
      if (currentLife <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }  

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += Character.generateRandomNumber();
    this._strength += Character.generateRandomNumber();
    this._dexterity += Character.generateRandomNumber();
    this._defense += Character.generateRandomNumber();
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: SimpleFighter) {
    const currStr = this._strength;
    this._strength = 999999999999999;
    const KAMEHAMEHA = this._strength;
    console.log('KAAA-MEEE-HAA-MEEEE-HAAAA! RECEBA!!!!!!!!!!!!!!');
    enemy.receiveDamage(KAMEHAMEHA);
    this._strength = currStr;
  }
}