import { Request, Response } from 'express';
import Medic from '../models/Medic';
import Specialty from '../models/Specialty';

interface IMedic {
  id: string;
  name: string;
  specialty: {
    id: string;
    description: string;
  };
}

export default class MedicController {
  public async index(
    _: Request,
    response: Response,
  ): Promise<Response<IMedic[]>> {
    try {
      const Medics = new Medic();
      const AllMedics = await Medics.list();

      return response.json(AllMedics);
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }

  public async create(
    request: Request,
    response: Response,
  ): Promise<Response<IMedic>> {
    try {
      const { name, specialty_id } = request.body;
      const medic = new Medic();
      const Specialtys = new Specialty();
      const AllSpecialtys = await Specialtys.list();
      const findSpecialtyIndex = AllSpecialtys.findIndex(
        find => find.id === specialty_id,
      );

      if (!findSpecialtyIndex || findSpecialtyIndex === -1 || !specialty_id) {
        return response.status(401).json({ error: 'Specialty ID not found!' });
      }

      if (!name || !specialty_id) {
        return response
          .status(401)
          .json({ error: 'please fill in the fields "name";"specialty" ' });
      }

      const specialty = AllSpecialtys[findSpecialtyIndex];

      const newMedic = await medic.create({
        name,
        specialty_id,
      });

      const MedicSpecialty = {
        id: newMedic.id,
        name: newMedic.name,
        specialty: {
          id: specialty.id,
          description: specialty.description,
        },
      };

      return response.json(MedicSpecialty);
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }

  public async update(
    request: Request,
    response: Response,
  ): Promise<Response<IMedic> | Response> {
    try {
      const Medics = new Medic();
      const { name, specialty_id } = request.body;
      const { id } = request.params;

      const AllMedics = await Medics.list();
      const findMedicIndex = AllMedics.findIndex(find => find.id === id);

      if (!findMedicIndex || findMedicIndex === -1 || !id) {
        return response.status(401).json({ error: 'Medic ID not found!' });
      }

      const UpdatedMedic = await Medics.update({
        id,
        name,
        specialty_id,
      });

      return response.status(200).json(UpdatedMedic);
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const Medics = new Medic();
      const { id } = request.params;

      const AllMedics = await Medics.list();
      const findMedicIndex = AllMedics.findIndex(find => find.id === id);

      if (findMedicIndex === -1 || !id) {
        return response.status(401).json({ error: 'Medic ID not found!' });
      }

      await Medics.delete(id);

      return response.status(200).json({ success: 'deleted' });
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }
}
