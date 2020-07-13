import { Router } from 'express';

import MedicController from '@modules/Medic/controllers/MedicController';
import AppointmentController from '@modules/Appointment/controllers/AppointmentController';

const medicController = new MedicController();
const appointmetController = new AppointmentController();

const routes = Router();

routes.post('/medic', medicController.create);
routes.get('/medic', medicController.index);
routes.put('/medic/:id', medicController.update);
routes.delete('/medic/:id', medicController.delete);

routes.get('/appointment', appointmetController.index);
routes.get('/appointment/medic/:id', appointmetController.findMedicAppointment);

routes.post('/appointment', appointmetController.create);
routes.put('/appointment/:id', appointmetController.update);
routes.delete('/appointment/:id', appointmetController.delete);

export default routes;
