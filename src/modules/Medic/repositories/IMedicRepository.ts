import ICreateMedicDTO from '../dtos/ICreateMedicDTO';

export default interface IMedicRepository {
  list(data: ICreateMedicDTO): Promise<ICreateMedicDTO[]>;
  create(data: ICreateMedicDTO): Promise<ICreateMedicDTO>;
  update(data: ICreateMedicDTO): Promise<ICreateMedicDTO>;
  delete(id: string): Promise<void>;
}
