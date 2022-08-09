import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _createdInstances = 0;

  static createdRacesInstances(): number {
    Elf._createdInstances += 1;
    return Elf._createdInstances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Elf;