import Character from '../Character';
import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Character | Fighter;
  private _enemy: Monster[] | Fighter[] | SimpleFighter[];

  constructor(
    player: Character | Fighter, 
    enemy: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._player = player;
    this._enemy = enemy;
  }

  fight(): number {
    let result = 1;
    this._enemy.forEach((e) => {
      while (this._player.lifePoints !== -1 && e.lifePoints !== -1) {
        this._player.attack(e);
        if (e.lifePoints !== -1) {
          e.attack(this._player); 
        }
      }
      if (this._player.lifePoints === -1) result = -1;
    });
    return result;
  }
}