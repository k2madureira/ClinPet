import { uuid } from 'uuidv4';

import ICreateSpecialtyDTO from '../dtos/ICreateSpecialtyDTO';

export default class Specialty {
  specialtys: Array<ICreateSpecialtyDTO> = [];

  path: string;

  constructor() {
    this.specialtys = [
      {
        id: '_SPECIALTYID_',
        description: '_REPEAT_',
      },
    ];
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

    return specialty;
  }

  public async delete(id: string): Promise<void> {
    const SpecialtyIndex = this.specialtys.findIndex(find => find.id === id);
    this.specialtys.splice(SpecialtyIndex, 1);
  }

  public async truncate(): Promise<void> {
    const empty = this.specialtys.splice(0, this.specialtys.length);
    this.specialtys = empty;
  }
}
