"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var MedicController_1 = __importDefault(require("@modules/Medic/controllers/MedicController"));
var AppointmentController_1 = __importDefault(require("@modules/Appointment/controllers/AppointmentController"));
var SpecialtyController_1 = __importDefault(require("@modules/Specialty/controllers/SpecialtyController"));
var medicController = new MedicController_1.default();
var appointmentController = new AppointmentController_1.default();
var specialtyController = new SpecialtyController_1.default();
var routes = express_1.Router();
routes.post('/medic', medicController.create);
routes.get('/medic', medicController.index);
routes.put('/medic/:id', medicController.update);
routes.delete('/medic/:id', medicController.delete);
routes.get('/', appointmentController.index);
routes.get('/appointment', appointmentController.index);
routes.get('/appointment/medic/:id', appointmentController.findMedicAppointment);
routes.get('/appointment/medic/:id/all', appointmentController.findAllMedicAppointment);
routes.post('/appointment', appointmentController.create);
routes.put('/appointment/:id', appointmentController.update);
routes.delete('/appointment/:id', appointmentController.delete);
routes.get('/specialty', specialtyController.index);
routes.post('/specialty', specialtyController.create);
routes.delete('/specialty/:id', specialtyController.delete);
exports.default = routes;
