import { Request, Response } from 'express';
import Specialty from '@modules/Specialty/models/Specialty';
import ICreateSpecialtyDTO from '../dtos/ICreateSpecialtyDTO';

export default class SpecialtyController {
  public async index(
    _: Request,
    response: Response,
  ): Promise<Response<ICreateSpecialtyDTO[]>> {
    try {
      const specialtys = new Specialty();

      const allSpecialtys = await specialtys.list();

      return response.json({ specialtys: allSpecialtys });
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }

  public async create(
    request: Request,
    response: Response,
  ): Promise<Response<ICreateSpecialtyDTO>> {
    try {
      const { description } = request.body;

      const specialtys = new Specialty();
      const allSpecialtys = await specialtys.list();

      if (!description) {
        return response.status(401).json({
          error: 'please fill in the field [description] ',
        });
      }

      const findSpecialty = allSpecialtys.find(
        specialty => specialty.description === description,
      );

      if (findSpecialty) {
        return response.status(401).json({
          error: 'Specialty already exist',
          Specialtys: allSpecialtys,
        });
      }

      const newSpecialty = await specialtys.create({
        description,
      });

      return response.json(newSpecialty);
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const specialtys = new Specialty();

      const allSpecialtys = await specialtys.list();

      const findSpecialty = allSpecialtys.find(find => find.id === id);

      if (!findSpecialty) {
        return response.status(401).json({ error: 'Specialty ID not found!' });
      }

      await specialtys.delete(id);

      return response.status(200).json({ success: 'deleted' });
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }
}
