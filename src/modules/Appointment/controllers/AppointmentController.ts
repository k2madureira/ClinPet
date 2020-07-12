import { Request, Response } from 'express';
import Specialty from '@modules/Specialty/models/Specialty';
import Medic from '@modules/Medic/models/Medic';
import Appointment from '../models/Appointment';
import IAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default class AppointmentController {
  public async index(
    _: Request,
    response: Response,
  ): Promise<Response<IAppointmentDTO[]>> {
    try {
      const Appointments = new Appointment();

      const appointments = await Appointments.list();

      return response.json(appointments);
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }

  public async findMedicAppointment(
    request: Request,
    response: Response,
  ): Promise<Response<IAppointmentDTO>> {
    const { id } = request.params;
    const Appointments = new Appointment();
    const Medics = new Medic();

    const appointments = await Appointments.list();
    const medics = await Medics.list();

    const findMedicIndex = medics.findIndex(find => find.id === id);

    if (findMedicIndex === -1 || !id) {
      return response.status(401).json({ error: 'Medic ID not found!' });
    }

    const medic = medics[findMedicIndex];

    const findNextAppointment = appointments.find(appointment => {
      return (
        appointment.status !== 'Atendido' &&
        appointment.status !== 'Cancelado' &&
        appointment.specialty_id === medic.specialty_id
      );
    });

    return response
      .status(200)
      .json(findNextAppointment || { message: 'No pending appointments.' });
  }

  public async create(
    request: Request,
    response: Response,
  ): Promise<Response<IAppointmentDTO>> {
    try {
      const {
        name,
        species,
        breed,
        urgent,
        status,
        specialty_id,
      } = request.body;
      const appointment = new Appointment();
      const Specialtys = new Specialty();
      const AllSpecialtys = await Specialtys.list();
      const findSpecialtyIndex = AllSpecialtys.findIndex(
        find => find.id === specialty_id,
      );

      if (findSpecialtyIndex === -1 || !specialty_id) {
        return response.status(401).json({
          error: 'Specialty ID not found!. Please select one these:',
          Specialtys: AllSpecialtys,
        });
      }

      if (!name || !specialty_id || !species) {
        return response.status(401).json({
          error:
            'please fill in the fields [name, specialty_id, species, urgent] ',
        });
      }

      const v = status === 'Atendido';

      if (
        status &&
        status !== 'Pendente' &&
        status !== 'Cancelado' &&
        status !== 'Atendido'
      ) {
        return response.status(401).json({
          error: `please fill in the field status with [ Atendido ; Pendente ; Cancelado] ${v}`,
        });
      }
      const specialty = AllSpecialtys[findSpecialtyIndex];

      const newAppointment = await appointment.create({
        name,
        species,
        breed,
        specialty_id,
        urgent,
        status,
      });

      const AppointmentResponse = {
        id: newAppointment.id,
        name,
        species,
        breed,
        urgent,
        status: newAppointment.status,
        specialty: {
          id: specialty.id,
          description: specialty.description,
        },
      };

      return response.json(AppointmentResponse);
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }

  public async update(
    request: Request,
    response: Response,
  ): Promise<Response<IAppointmentDTO> | Response> {
    try {
      const Appointments = new Appointment();
      const appointments = await Appointments.list();
      const { id } = request.params;

      const findIndex = appointments.findIndex(find => find.id === id);

      if (findIndex === -1 || !id) {
        return response.status(401).json({ error: 'Appointment not found!' });
      }

      const updatedAppointment = await Appointments.update(id);

      return response.status(200).json(updatedAppointment);
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const Appointments = new Appointment();
      const appointments = await Appointments.list();
      const { id } = request.params;

      const findIndex = appointments.findIndex(find => find.id === id);

      if (findIndex === -1 || !id) {
        return response.status(401).json({ error: 'Appointment not found!' });
      }

      await Appointments.delete(id);

      return response.status(200).json({ success: 'deleted' });
    } catch (error) {
      return response.status(500).json({ error: 'Error' });
    }
  }
}
