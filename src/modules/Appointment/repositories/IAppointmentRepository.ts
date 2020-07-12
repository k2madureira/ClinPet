import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentRepository {
  create(data: ICreateAppointmentDTO): Promise<ICreateAppointmentDTO>;
}