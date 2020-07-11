import { uuid } from 'uuidv4';
import { resolve } from 'path';
import fs from 'fs';
import IMedicRepository from './repositories/IMedicRepository';
import ICreateMedicDTO from '../dtos/ICreateMedicDTO';

interface IMedic {
  id?: string;
  name: string;
  specialty: string;
}

export default class Medic implements IMedicRepository {
  medics: Array<ICreateMedicDTO> = [];

  path: string;

  constructor() {
    this.medics = [];
    this.path = resolve(__dirname, '..', 'database', 'medics.json');
    this.loadJson();
  }

  loadJson(): void {
    const data = fs.readFileSync(this.path);
    this.medics = JSON.parse(data.toString());
  }

  public async list(): Promise<ICreateMedicDTO[]> {
    return this.medics;
  }

  public async create({ name, specialty }: IMedic): Promise<ICreateMedicDTO> {
    const medic = {
      id: uuid(),
      name,
      specialty,
    };

    this.medics.push(medic);
    fs.writeFileSync(this.path, JSON.stringify(this.medics, null, 2));

    return medic;
  }

  public async update({
    id,
    name,
    specialty,
  }: IMedic): Promise<ICreateMedicDTO> {
    const findMedicIndex = this.medics.findIndex(find => find.id === id);

    const medic = {
      id: this.medics[findMedicIndex].id,
      name: name || this.medics[findMedicIndex].name,
      specialty: specialty || this.medics[findMedicIndex].specialty,
    };

    this.medics[findMedicIndex] = medic;
    fs.writeFileSync(this.path, JSON.stringify(this.medics, null, 2));

    return medic;
  }

  public async delete(id: string): Promise<void> {
    const MedicIndex = this.medics.findIndex(find => find.id === id);
    this.medics.slice(MedicIndex, 1);
    fs.writeFileSync(this.path, JSON.stringify(this.medics, null, 2));
  }
}
