// import { uuid } from 'uuidv4';
import { resolve } from 'path';
import fs from 'fs';
import ICreateSpecialtyDTO from '../dtos/ICreateSpecialtyDTO';

interface ISpecialty {
  id?: string;
  description: string;
}

export default class Specialty {
  specialtys: Array<ICreateSpecialtyDTO> = [];

  path: string;

  constructor() {
    this.specialtys = [];
    this.path = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'shared',
      'database',
      'specialtys.json',
    );
    this.loadJson();
  }

  loadJson(): void {
    const data = fs.readFileSync(this.path);
    this.specialtys = JSON.parse(data.toString());
  }

  public async list(): Promise<ICreateSpecialtyDTO[]> {
    return this.specialtys;
  }
}
