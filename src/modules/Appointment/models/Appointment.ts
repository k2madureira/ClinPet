import { uuid } from 'uuidv4';
import { resolve } from 'path';
import fs from 'fs';
import IAppointmentRepository from '../repositories/IAppointmentRepository';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default class Appointment implements IAppointmentRepository {
  appointments: Array<ICreateAppointmentDTO> = [];

  path: string;

  constructor() {
    this.appointments = [];
    this.path = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'shared',
      'database',
      'appointments.json',
    );
    this.loadJson();
  }

  loadJson(): void {
    const data = fs.readFileSync(this.path);
    this.appointments = JSON.parse(data.toString());
  }

  public async list(): Promise<ICreateAppointmentDTO[]> {
    return this.appointments;
  }

  public async create({
    name,
    species,
    breed,
    specialty_id,
    urgent,
    status,
  }: ICreateAppointmentDTO): Promise<ICreateAppointmentDTO> {
    const appointment = {
      id: uuid(),
      name,
      species,
      breed,
      specialty_id,
      urgent,
      status: status || 'Pendente',
    };

    this.appointments.push(appointment);
    fs.writeFileSync(this.path, JSON.stringify(this.appointments, null, 2));

    return appointment;
  }

  public async delete(id: string): Promise<void> {
    const MedicIndex = this.appointments.findIndex(find => find.id === id);
    this.appointments.splice(MedicIndex, 1);

    fs.writeFileSync(this.path, JSON.stringify(this.appointments, null, 2));
  }
}
