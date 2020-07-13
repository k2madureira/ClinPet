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
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("@shared/app"));
describe('Appointment', function () {
    it('Should be able create  a new appointment', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/appointment').send({
                        name: '_NAME_',
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        medic_id: '_MEDICID_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: false,
                        status: 'Atendido',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able create  a new appointment without [medic_id]', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/appointment').send({
                        name: '_NAME_',
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: false,
                        status: 'Atendido',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able create  a new appointment with wrong [urgent: boolean]', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/appointment').send({
                        name: '_NAME_',
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: '_WRONG_',
                        status: 'Atendido',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to create a new appointment, with wrong specialty_id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/appointment').send({
                        name: '_NAME_',
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        medic_id: '_MEDICID_',
                        specialty_id: '_WRONG_',
                        urgent: false,
                        status: 'Atendido',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to create a new appointment, without [name]', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/appointment').send({
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        medic_id: '_MEDICID_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: false,
                        status: 'Atendido',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to create a new appointment, with wrong [status]', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/appointment').send({
                        name: '_NAME_',
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        medic_id: '_MEDICID_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: false,
                        status: '_WRONG_',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    /* ----------
     *  UPDATE
     -----------*/
    it('Should be able update  a appointment', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .put('/appointment/_APPOINTMENTID_')
                        .send({
                        name: '_NAME_',
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        medic_id: '_MEDICID_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: false,
                        status: 'Atendido',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to update a appointment, with missing fields', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .put('/appointment/_APPOINTMENTID_')
                        .send({
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to update a appointment, with wrong field [urgent]', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .put('/appointment/_APPOINTMENTID_')
                        .send({
                        medic_id: '_MEDICID_',
                        urgent: '_WRONG_',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able update a appointment with wrong [urgent: boolean]', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .put('/appointment/_APPOINTMENTID_')
                        .send({
                        name: '_NAME_',
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: '_WRONG_',
                        status: 'Atendido',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to update a appointment, with wrong ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).put('/appointment/_WRONG_').send({
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        medic_id: '_MEDICID_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: false,
                        status: 'Atendido',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to update a appointment, with wrong [status]', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .put('/appointment/_APPOINTMENTID_')
                        .send({
                        name: '_NAME_',
                        species: '_SPECIES_',
                        breed: '_BREED_',
                        medic_id: '_MEDICID_',
                        specialty_id: '_SPECIALTYID_',
                        urgent: false,
                        status: '_WRONG_',
                        created_at: new Date(),
                        updated_at: new Date(),
                    })];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to delete appointment', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).delete('/appointment/_APPOINTMENTID_')];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('success');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to delete appointment with wrong ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).delete('/appointment/_WRONG_')];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to list appointment', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).get('/appointment')];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('appointments');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to find one appointment for a medic', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).get('/appointment/medic/_MEDICID_')];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('appointment');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able find one appointment for a medic, with wrong ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).get('/appointment/medic/_WRONG_')];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to list all appointments for a medic', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).get('/appointment/medic/_MEDICID_/all')];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('appointments');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to list all appointments for a medic, with wrong ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var appointment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).get('/appointment/medic/_WRONG_/all')];
                case 1:
                    appointment = _a.sent();
                    expect(appointment.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
});
