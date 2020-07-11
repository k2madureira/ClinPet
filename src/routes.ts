import { Router } from 'express';

import MedicController from './controllers/MedicController';

const medicController = new MedicController();

const routes = Router();

routes.post('/medic', medicController.create);
routes.get('/medic', medicController.index);
routes.put('/medic/:id', medicController.update);
routes.delete('/medic/:id', medicController.delete);

export default routes;
