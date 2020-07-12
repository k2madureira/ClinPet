export default interface ICreateAppointmentDTO {
  id?: string;
  name: string;
  species: string;
  breed: string;
  urgent: boolean;
  specialty_id: string;
  status?: 'Pendente' | 'Cancelado' | 'Atendido';
}
