"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Specialty_1 = __importDefault(require("@modules/Specialty/models/Specialty"));
var FakeSpecialty_1 = __importDefault(require("@modules/Specialty/fakes/FakeSpecialty"));
var Medic_1 = __importDefault(require("@modules/Medic/models/Medic"));
var FakeMedic_1 = __importDefault(require("@modules/Medic/fakes/FakeMedic"));
var Appointment_1 = __importDefault(require("../models/Appointment"));
var FakeAppointment_1 = __importDefault(require("../fakes/FakeAppointment"));
var Medic = process.env.NODE_ENV === 'test' ? FakeMedic_1.default : Medic_1.default;
var Specialty = process.env.NODE_ENV === 'test' ? FakeSpecialty_1.default : Specialty_1.default;
var Appointment = process.env.NODE_ENV === 'test' ? FakeAppointment_1.default : Appointment_1.default;
var AppointmentController = /** @class */ (function () {
    function AppointmentController() {
    }
    AppointmentController.prototype.index = function (_, response) {
        return __awaiter(this, void 0, void 0, function () {
            var Appointments, medics, specialtys, allSpecialtys_1, allMedics_1, appointments, appointmentsFormated, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        Appointments = new Appointment();
                        medics = new Medic();
                        specialtys = new Specialty();
                        return [4 /*yield*/, specialtys.list()];
                    case 1:
                        allSpecialtys_1 = _a.sent();
                        return [4 /*yield*/, medics.list()];
                    case 2:
                        allMedics_1 = _a.sent();
                        return [4 /*yield*/, Appointments.list()];
                    case 3:
                        appointments = _a.sent();
                        appointmentsFormated = appointments.map(function (appointment) {
                            var currentMedic = allMedics_1.find(function (medic) { return medic.id === appointment.medic_id; });
                            return {
                                id: appointment.id,
                                name: appointment.name,
                                species: appointment.species,
                                breed: appointment.breed,
                                urgent: appointment.urgent,
                                status: appointment.status,
                                medic: {
                                    id: currentMedic ? currentMedic.id : '',
                                    name: currentMedic ? currentMedic.name : '',
                                    specialty: allSpecialtys_1.find(function (sp) { return sp.id === appointment.specialty_id; }),
                                },
                                created_at: appointment.created_at,
                                updated_at: appointment.updated_at,
                            };
                        });
                        return [2 /*return*/, response.json({ appointments: appointmentsFormated })];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AppointmentController.prototype.findMedicAppointment = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, Appointments, Medics, appointments, allMedics, currentMedic, findNextAppointment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        Appointments = new Appointment();
                        Medics = new Medic();
                        return [4 /*yield*/, Appointments.list()];
                    case 1:
                        appointments = _a.sent();
                        return [4 /*yield*/, Medics.list()];
                    case 2:
                        allMedics = _a.sent();
                        currentMedic = allMedics.find(function (medic) { return medic.id === id; });
                        if (!currentMedic) {
                            return [2 /*return*/, response.status(401).json({ error: 'Medic ID not found!' })];
                        }
                        findNextAppointment = appointments.find(function (appointment) {
                            return (appointment.status !== 'Atendido' &&
                                appointment.status !== 'Cancelado' &&
                                (appointment.medic_id === currentMedic.id || !appointment.medic_id));
                        });
                        return [2 /*return*/, response
                                .status(200)
                                .json({ appointment: findNextAppointment || [] })];
                }
            });
        });
    };
    AppointmentController.prototype.findAllMedicAppointment = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, Appointments, Medics, appointments, allMedics, currentMedic, findNextAppointment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        Appointments = new Appointment();
                        Medics = new Medic();
                        return [4 /*yield*/, Appointments.list()];
                    case 1:
                        appointments = _a.sent();
                        return [4 /*yield*/, Medics.list()];
                    case 2:
                        allMedics = _a.sent();
                        currentMedic = allMedics.find(function (medic) { return medic.id === id; });
                        if (!currentMedic) {
                            return [2 /*return*/, response.status(401).json({ error: 'Medic ID not found!' })];
                        }
                        findNextAppointment = appointments.filter(function (appointment) {
                            return (appointment.status !== 'Atendido' &&
                                appointment.status !== 'Cancelado' &&
                                (appointment.medic_id === currentMedic.id ||
                                    appointment.medic_id === ''));
                        });
                        return [2 /*return*/, response
                                .status(200)
                                .json({ appointments: findNextAppointment || [] })];
                }
            });
        });
    };
    AppointmentController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, species, breed, urgent, status_1, specialty_id_1, medic_id_1, medics, appointment, specialtys, allSpecialtys, allMedics, currentMedic, findSpecialty, newAppointment, AppointmentResponse, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        _a = request.body, name_1 = _a.name, species = _a.species, breed = _a.breed, urgent = _a.urgent, status_1 = _a.status, specialty_id_1 = _a.specialty_id, medic_id_1 = _a.medic_id;
                        medics = new Medic();
                        appointment = new Appointment();
                        specialtys = new Specialty();
                        return [4 /*yield*/, specialtys.list()];
                    case 1:
                        allSpecialtys = _b.sent();
                        return [4 /*yield*/, medics.list()];
                    case 2:
                        allMedics = _b.sent();
                        currentMedic = allMedics.find(function (medic) { return medic.id === medic_id_1; });
                        findSpecialty = allSpecialtys.find(function (specialty) { return specialty.id === specialty_id_1; });
                        if (!findSpecialty && specialty_id_1) {
                            return [2 /*return*/, response.status(401).json({
                                    error: 'Specialty ID not found!. Please select one these:',
                                    Specialtys: allSpecialtys,
                                })];
                        }
                        if (!name_1 || !specialty_id_1 || !species) {
                            return [2 /*return*/, response.status(401).json({
                                    error: 'please fill in the fields [name, specialty_id, species, urgent] ',
                                })];
                        }
                        if (status_1 &&
                            status_1 !== 'Pendente' &&
                            status_1 !== 'Cancelado' &&
                            status_1 !== 'Atendido') {
                            return [2 /*return*/, response.status(401).json({
                                    error: "please fill in the field status with [ Atendido ; Pendente ; Cancelado]",
                                })];
                        }
                        return [4 /*yield*/, appointment.create({
                                name: name_1,
                                species: species,
                                breed: breed,
                                specialty_id: specialty_id_1,
                                medic_id: medic_id_1 || null,
                                urgent: typeof urgent !== 'boolean' ? false : urgent,
                                status: status_1,
                                created_at: new Date(),
                                updated_at: new Date(),
                            })];
                    case 3:
                        newAppointment = _b.sent();
                        if (currentMedic) {
                            delete currentMedic.specialty_id;
                        }
                        AppointmentResponse = {
                            id: newAppointment.id,
                            name: name_1,
                            species: species,
                            breed: breed,
                            urgent: newAppointment.urgent,
                            status: newAppointment.status,
                            medic: {
                                id: currentMedic ? currentMedic.id : '',
                                name: currentMedic ? currentMedic.name : '',
                                specialty: allSpecialtys.find(function (sp) { return sp.id === specialty_id_1; }),
                            },
                            created_at: newAppointment.created_at,
                        };
                        return [2 /*return*/, response.json(AppointmentResponse)];
                    case 4:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AppointmentController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var medics, Appointments, specialtys, allMedics, appointments, allSpecialtys, id_1, _a, name_2, species, breed, urgent, status_2, specialty_id_2, medic_id_2, currentAppointment_1, urgentValidation, medicIdValidation, updatedAppointment, currentMedic, deleteAppointment, _b, AppointmentResponse, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 8, , 9]);
                        medics = new Medic();
                        Appointments = new Appointment();
                        specialtys = new Specialty();
                        return [4 /*yield*/, medics.list()];
                    case 1:
                        allMedics = _c.sent();
                        return [4 /*yield*/, Appointments.list()];
                    case 2:
                        appointments = _c.sent();
                        return [4 /*yield*/, specialtys.list()];
                    case 3:
                        allSpecialtys = _c.sent();
                        id_1 = request.params.id;
                        _a = request.body, name_2 = _a.name, species = _a.species, breed = _a.breed, urgent = _a.urgent, status_2 = _a.status, specialty_id_2 = _a.specialty_id, medic_id_2 = _a.medic_id;
                        currentAppointment_1 = appointments.find(function (appointment) { return appointment.id === id_1; });
                        if (!currentAppointment_1) {
                            return [2 /*return*/, response.status(401).json({ error: 'Appointment not found!' })];
                        }
                        if (status_2 &&
                            status_2 !== 'Pendente' &&
                            status_2 !== 'Cancelado' &&
                            status_2 !== 'Atendido') {
                            return [2 /*return*/, response.status(401).json({
                                    error: "please fill in the field status with [ Atendido ; Pendente ; Cancelado]",
                                })];
                        }
                        urgentValidation = typeof urgent !== 'boolean' ? false : urgent;
                        urgentValidation =
                            typeof urgent !== 'undefined'
                                ? urgentValidation
                                : currentAppointment_1.urgent;
                        medicIdValidation = typeof medic_id_2 === 'undefined' && currentAppointment_1.medic_id === null
                            ? null
                            : currentAppointment_1.medic_id;
                        return [4 /*yield*/, Appointments.update({
                                id: id_1,
                                name: name_2 || currentAppointment_1.name,
                                species: species || currentAppointment_1.species,
                                breed: breed || currentAppointment_1.breed,
                                medic_id: medicIdValidation,
                                specialty_id: specialty_id_2 || currentAppointment_1.specialty_id,
                                urgent: urgentValidation,
                                status: status_2 || currentAppointment_1.status,
                                created_at: currentAppointment_1.created_at,
                                updated_at: new Date(),
                            })];
                    case 4:
                        updatedAppointment = _c.sent();
                        currentMedic = allMedics.find(function (medic) {
                            return medic.id === currentAppointment_1.medic_id || medic.id === medic_id_2;
                        });
                        if (currentMedic) {
                            delete currentMedic.specialty_id;
                        }
                        if (!(updatedAppointment.status === 'Atendido')) return [3 /*break*/, 6];
                        return [4 /*yield*/, Appointments.delete(id_1)];
                    case 5:
                        _b = _c.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _b = false;
                        _c.label = 7;
                    case 7:
                        deleteAppointment = _b;
                        AppointmentResponse = {
                            id: updatedAppointment.id,
                            name: name_2 || currentAppointment_1.name,
                            species: species || currentAppointment_1.species,
                            breed: breed || currentAppointment_1.breed,
                            urgent: updatedAppointment.urgent,
                            status: typeof deleteAppointment !== 'undefined'
                                ? updatedAppointment.status
                                : 'Atendido ( Appointment Deleted ❌)',
                            medic: {
                                id: currentMedic ? currentMedic.id : '',
                                name: currentMedic ? currentMedic.name : '',
                                specialty: allSpecialtys.find(function (sp) { return sp.id === specialty_id_2; }),
                            },
                            created_at: updatedAppointment.created_at,
                            updated_at: updatedAppointment.updated_at,
                        };
                        return [2 /*return*/, response.status(200).json(AppointmentResponse)];
                    case 8:
                        error_3 = _c.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AppointmentController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var Appointments, appointments, id_2, findIndex, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        Appointments = new Appointment();
                        return [4 /*yield*/, Appointments.list()];
                    case 1:
                        appointments = _a.sent();
                        id_2 = request.params.id;
                        findIndex = appointments.findIndex(function (find) { return find.id === id_2; });
                        if (findIndex === -1 || !id_2) {
                            return [2 /*return*/, response.status(401).json({ error: 'Appointment not found!' })];
                        }
                        return [4 /*yield*/, Appointments.delete(id_2)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({ success: 'deleted' })];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AppointmentController;
}());
exports.default = AppointmentController;
