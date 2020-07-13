"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Appointment_1 = __importDefault(require("@modules/Appointment/models/Appointment"));
var FakeAppointment_1 = __importDefault(require("@modules/Appointment/fakes/FakeAppointment"));
var Medic_1 = __importDefault(require("../models/Medic"));
var FakeMedic_1 = __importDefault(require("../fakes/FakeMedic"));
var Medic = process.env.NODE_ENV === 'test' ? FakeMedic_1.default : Medic_1.default;
var Specialty = process.env.NODE_ENV === 'test' ? FakeSpecialty_1.default : Specialty_1.default;
var Appointment = process.env.NODE_ENV === 'test' ? FakeAppointment_1.default : Appointment_1.default;
var MedicController = /** @class */ (function () {
    function MedicController() {
    }
    MedicController.prototype.index = function (_, response) {
        return __awaiter(this, void 0, void 0, function () {
            var Medics, listMedics, Specialtys, AllSpecialtys_1, AllMedics, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        Medics = new Medic();
                        return [4 /*yield*/, Medics.list()];
                    case 1:
                        listMedics = _a.sent();
                        Specialtys = new Specialty();
                        return [4 /*yield*/, Specialtys.list()];
                    case 2:
                        AllSpecialtys_1 = _a.sent();
                        AllMedics = listMedics.map(function (medic) {
                            var index = AllSpecialtys_1.findIndex(function (find) { return find.id === medic.specialty_id; });
                            var specialty = AllSpecialtys_1[index];
                            return {
                                id: medic.id,
                                name: medic.name,
                                specialty: {
                                    id: medic.specialty_id,
                                    description: specialty.description,
                                },
                            };
                        });
                        return [2 /*return*/, response.json({ medics: AllMedics })];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MedicController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, specialty_id_1, medic, specialtys, allSpecialtys, findSpecialtyIndex, specialty, newMedic, MedicSpecialty, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = request.body, name_1 = _a.name, specialty_id_1 = _a.specialty_id;
                        medic = new Medic();
                        specialtys = new Specialty();
                        return [4 /*yield*/, specialtys.list()];
                    case 1:
                        allSpecialtys = _b.sent();
                        findSpecialtyIndex = allSpecialtys.findIndex(function (find) { return find.id === specialty_id_1; });
                        if (!name_1 || !specialty_id_1) {
                            return [2 /*return*/, response
                                    .status(401)
                                    .json({ error: 'please fill in the fields [name, specialty_id] ' })];
                        }
                        if (findSpecialtyIndex === -1 || !specialty_id_1) {
                            return [2 /*return*/, response.status(401).json({
                                    error: 'Specialty ID not found!. Please select one these:',
                                    Specialtys: allSpecialtys,
                                })];
                        }
                        specialty = allSpecialtys[findSpecialtyIndex];
                        return [4 /*yield*/, medic.create({
                                name: name_1,
                                specialty_id: specialty_id_1,
                            })];
                    case 2:
                        newMedic = _b.sent();
                        MedicSpecialty = {
                            id: newMedic.id,
                            name: newMedic.name,
                            specialty: {
                                id: specialty.id,
                                description: specialty.description,
                            },
                        };
                        return [2 /*return*/, response.json(MedicSpecialty)];
                    case 3:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MedicController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_2, specialty_id_2, id_1, Medics, Specialtys, AllSpecialtys, findSpecialty, AllMedics, currentMedic, UpdatedMedic_1, MedicSpecialty, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        _a = request.body, name_2 = _a.name, specialty_id_2 = _a.specialty_id;
                        id_1 = request.params.id;
                        Medics = new Medic();
                        Specialtys = new Specialty();
                        return [4 /*yield*/, Specialtys.list()];
                    case 1:
                        AllSpecialtys = _b.sent();
                        findSpecialty = AllSpecialtys.find(function (specialty) { return specialty.id === specialty_id_2; });
                        if (!findSpecialty && specialty_id_2) {
                            return [2 /*return*/, response.status(401).json({
                                    error: 'Specialty ID not found!. Please select one these:',
                                    Specialtys: AllSpecialtys,
                                })];
                        }
                        return [4 /*yield*/, Medics.list()];
                    case 2:
                        AllMedics = _b.sent();
                        currentMedic = AllMedics.find(function (medic) { return medic.id === id_1; });
                        if (!currentMedic) {
                            return [2 /*return*/, response.status(401).json({ error: 'Medic ID not found!' })];
                        }
                        return [4 /*yield*/, Medics.update({
                                id: id_1,
                                name: name_2 || currentMedic.name,
                                specialty_id: specialty_id_2 || currentMedic.specialty_id,
                            })];
                    case 3:
                        UpdatedMedic_1 = _b.sent();
                        MedicSpecialty = {
                            id: UpdatedMedic_1.id,
                            name: UpdatedMedic_1.name,
                            specialty: AllSpecialtys.find(function (sp) { return sp.id === UpdatedMedic_1.specialty_id; }),
                        };
                        return [2 /*return*/, response.status(200).json(MedicSpecialty)];
                    case 4:
                        error_3 = _b.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MedicController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var medics_1, appointments, id_2, allAppointments, allMedics, currentMedic, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        medics_1 = new Medic();
                        appointments = new Appointment();
                        id_2 = request.params.id;
                        return [4 /*yield*/, appointments.list()];
                    case 1:
                        allAppointments = _a.sent();
                        return [4 /*yield*/, medics_1.list()];
                    case 2:
                        allMedics = _a.sent();
                        currentMedic = allMedics.find(function (medic) { return medic.id === id_2; });
                        if (!currentMedic) {
                            return [2 /*return*/, response.status(401).json({ error: 'Medic ID not found!' })];
                        }
                        allAppointments.map(function (appointment) {
                            if (appointment.medic_id === id_2) {
                                var currentAppointment = __assign(__assign({}, appointment), { medic_id: '' });
                                medics_1.update(currentAppointment);
                            }
                            return appointment;
                        });
                        return [4 /*yield*/, medics_1.delete(id_2)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({ success: 'deleted' })];
                    case 4:
                        error_4 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return MedicController;
}());
exports.default = MedicController;
