import { uuid } from 'uuidv4';
import ICreateSpecialtyDTO from '../dtos/ICreateSpecialtyDTO';

export default class Specialty {
  specialtys: Array<ICreateSpecialtyDTO> = [];

  path: string;

  constructor() {
    this.specialtys = [];
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
}
