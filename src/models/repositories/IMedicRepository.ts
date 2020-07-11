import ICreateMedicDTO from '../../dtos/ICreateMedicDTO';

interface IMedic {
  id: string;
  name: string;
  specialty: string;
}

export default interface IMedicRepository {
  create(data: ICreateMedicDTO): Promise<IMedic>;
}
