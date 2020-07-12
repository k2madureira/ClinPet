import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentRepository {
  list(): Promise<ICreateAppointmentDTO[]>;
  listById(id: string): Promise<ICreateAppointmentDTO[]>;
  create(data: ICreateAppointmentDTO): Promise<ICreateAppointmentDTO>;
  update(id: string): Promise<ICreateAppointmentDTO>;
  delete(id: string): Promise<void>;
}
