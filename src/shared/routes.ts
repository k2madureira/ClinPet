import { Router } from 'express';

import MedicController from '@modules/Medic/controllers/MedicController';
import AppointmentController from '@modules/Appointment/controllers/AppointmentController';
import SpecialtyController from '@modules/Specialty/controllers/SpecialtyController';

const medicController = new MedicController();
const appointmentController = new AppointmentController();
const specialtyController = new SpecialtyController();

const routes = Router();

routes.post('/medic', medicController.create);
routes.get('/medic', medicController.index);
routes.put('/medic/:id', medicController.update);
routes.delete('/medic/:id', medicController.delete);

routes.get('/', appointmentController.index);
routes.get('/appointment', appointmentController.index);
routes.get(
  '/appointment/medic/:id',
  appointmentController.findMedicAppointment,
);
routes.get(
  '/appointment/medic/:id/all',
  appointmentController.findAllMedicAppointment,
);
routes.post('/appointment', appointmentController.create);
routes.put('/appointment/:id', appointmentController.update);
routes.delete('/appointment/:id', appointmentController.delete);

routes.get('/specialty', specialtyController.index);
routes.post('/specialty', specialtyController.create);
routes.put('/specialty/:id', specialtyController.update);
routes.delete('/specialty/:id', specialtyController.delete);

export default routes;
