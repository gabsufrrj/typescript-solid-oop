import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _createdInstances = 0; 

  static createdRacesInstances(): number {
    Halfling._createdInstances += 1;
    return Halfling._createdInstances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Halfling;