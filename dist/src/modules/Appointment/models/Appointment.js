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
var uuidv4_1 = require("uuidv4");
var path_1 = require("path");
var fs_1 = __importDefault(require("fs"));
var Appointment = /** @class */ (function () {
    function Appointment() {
        this.appointments = [];
        this.appointments = [];
        this.path = path_1.resolve(__dirname, '..', '..', '..', 'shared', 'database', 'appointments.json');
        this.loadJson();
    }
    Appointment.prototype.loadJson = function () {
        var data = fs_1.default.readFileSync(this.path);
        this.appointments = JSON.parse(data.toString());
    };
    Appointment.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.appointments.sort(function (a, b) {
                        return a.urgent < b.urgent ? 1 : -1;
                    })];
            });
        });
    };
    Appointment.prototype.listById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.appointments
                        .filter(function (medic) { return medic.id === id; })
                        .sort(function (a, b) {
                        return a.urgent < b.urgent ? 1 : -1;
                    })];
            });
        });
    };
    Appointment.prototype.create = function (_a) {
        var name = _a.name, species = _a.species, breed = _a.breed, specialty_id = _a.specialty_id, medic_id = _a.medic_id, urgent = _a.urgent, status = _a.status, created_at = _a.created_at, updated_at = _a.updated_at;
        return __awaiter(this, void 0, void 0, function () {
            var appointment;
            return __generator(this, function (_b) {
                appointment = {
                    id: uuidv4_1.uuid(),
                    name: name,
                    species: species,
                    breed: breed,
                    specialty_id: specialty_id,
                    medic_id: medic_id,
                    urgent: urgent,
                    status: status || 'Pendente',
                    created_at: created_at,
                    updated_at: updated_at,
                };
                this.appointments.push(appointment);
                fs_1.default.writeFileSync(this.path, JSON.stringify(this.appointments, null, 2));
                return [2 /*return*/, appointment];
            });
        });
    };
    Appointment.prototype.update = function (_a) {
        var id = _a.id, name = _a.name, species = _a.species, breed = _a.breed, specialty_id = _a.specialty_id, medic_id = _a.medic_id, urgent = _a.urgent, status = _a.status, created_at = _a.created_at, updated_at = _a.updated_at;
        return __awaiter(this, void 0, void 0, function () {
            var Index, appointment;
            return __generator(this, function (_b) {
                Index = this.appointments.findIndex(function (find) { return find.id === id; });
                appointment = {
                    id: id,
                    name: name,
                    species: species,
                    breed: breed,
                    specialty_id: specialty_id,
                    medic_id: medic_id,
                    urgent: urgent,
                    status: status,
                    created_at: created_at,
                    updated_at: updated_at,
                };
                // updatedAppointment.status = 'Atendido';
                this.appointments[Index] = appointment;
                fs_1.default.writeFileSync(this.path, JSON.stringify(this.appointments, null, 2));
                return [2 /*return*/, appointment];
            });
        });
    };
    Appointment.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var Index;
            return __generator(this, function (_a) {
                Index = this.appointments.findIndex(function (find) { return find.id === id; });
                this.appointments.splice(Index, 1);
                fs_1.default.writeFileSync(this.path, JSON.stringify(this.appointments, null, 2));
                return [2 /*return*/];
            });
        });
    };
    return Appointment;
}());
exports.default = Appointment;
