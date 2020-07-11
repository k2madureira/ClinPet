import ICreateMedicDTO from '../../dtos/ICreateMedicDTO';

interface IMedic {
  id: string;
  name: string;
  specialty_id: string;
}

export default interface IMedicRepository {
  create(data: ICreateMedicDTO): Promise<IMedic>;
}
