import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _createdInstances = 0;

  static createdRacesInstances(): number {
    Orc._createdInstances += 1;
    return Orc._createdInstances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Orc;