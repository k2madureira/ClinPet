import ICreateMedicDTO from '../dtos/ICreateMedicDTO';

interface IMedic {
  id: string;
  name: string;
  specialty_id: string;
}

export default interface IMedicRepository {
  list(data: ICreateMedicDTO): Promise<IMedic[]>;
  create(data: ICreateMedicDTO): Promise<IMedic>;
  update(data: ICreateMedicDTO): Promise<IMedic>;
  delete(id: string): Promise<void>;
}
