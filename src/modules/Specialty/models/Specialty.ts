import { uuid } from 'uuidv4';
import { resolve } from 'path';
import fs from 'fs';
import ICreateSpecialtyDTO from '../dtos/ICreateSpecialtyDTO';

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
      process.env.NODE_ENV === 'test' ? 'fakes' : '',
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

  public async create({
    description,
  }: ICreateSpecialtyDTO): Promise<ICreateSpecialtyDTO> {
    const specialty = {
      id: uuid(),
      description,
    };

    this.specialtys.push(specialty);
    fs.writeFileSync(this.path, JSON.stringify(this.specialtys, null, 2));

    return specialty;
  }

  public async update({
    id,
    description,
  }: ICreateSpecialtyDTO): Promise<ICreateSpecialtyDTO> {
    const findSpecialtyIndex = this.specialtys.findIndex(
      find => find.id === id,
    );

    const specialty = {
      id,
      description,
    };

    this.specialtys[findSpecialtyIndex] = specialty;
    fs.writeFileSync(this.path, JSON.stringify(this.specialtys, null, 2));

    return specialty;
  }

  public async delete(id: string): Promise<void> {
    const SpecialtyIndex = this.specialtys.findIndex(find => find.id === id);
    this.specialtys.splice(SpecialtyIndex, 1);

    fs.writeFileSync(this.path, JSON.stringify(this.specialtys, null, 2));
  }

  public async truncate(): Promise<void> {
    const empty = this.specialtys.splice(0, this.specialtys.length);
    this.specialtys = empty;

    fs.writeFileSync(this.path, JSON.stringify(this.specialtys, null, 2));
  }
}
