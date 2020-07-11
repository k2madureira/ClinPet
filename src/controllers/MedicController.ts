import { Request, Response } from 'express';
import Medic from '../models/Medic';

interface IMedic {
  id: string;
  name: string;
  specialty: string;
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
      const { name, specialty } = request.body;
      const medic = new Medic();

      if (!name || !specialty) {
        return response
          .status(401)
          .json({ error: 'please fill in the fields "name";"specialty" ' });
      }

      const newMedic = await medic.create({
        name,
        specialty,
      });

      return response.json(newMedic);
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
      const { name, specialty } = request.body;
      const { id } = request.params;

      const AllMedics = await Medics.list();
      const findMedicIndex = AllMedics.findIndex(find => find.id === id);

      if (!findMedicIndex || findMedicIndex === -1 || !id) {
        return response.status(401).json({ error: 'Medic ID not found!' });
      }

      const UpdatedMedic = await Medics.update({
        id,
        name,
        specialty,
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

      if (!findMedicIndex || findMedicIndex === -1 || !id) {
        return response.status(401).json({ error: 'Medic ID not found!' });
      }

      await Medics;

      return response.status(200);
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }
}
