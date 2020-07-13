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
var Specialty = process.env.NODE_ENV === 'test' ? FakeSpecialty_1.default : Specialty_1.default;
var SpecialtyController = /** @class */ (function () {
    function SpecialtyController() {
    }
    SpecialtyController.prototype.index = function (_, response) {
        return __awaiter(this, void 0, void 0, function () {
            var specialtys, allSpecialtys, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        specialtys = new Specialty();
                        return [4 /*yield*/, specialtys.list()];
                    case 1:
                        allSpecialtys = _a.sent();
                        return [2 /*return*/, response.json({ specialtys: allSpecialtys })];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SpecialtyController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var description_1, specialtys, allSpecialtys, findSpecialty, newSpecialty, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        description_1 = request.body.description;
                        specialtys = new Specialty();
                        return [4 /*yield*/, specialtys.list()];
                    case 1:
                        allSpecialtys = _a.sent();
                        if (!description_1) {
                            return [2 /*return*/, response.status(401).json({
                                    error: 'please fill in the field [description] ',
                                })];
                        }
                        findSpecialty = allSpecialtys.find(function (specialty) { return specialty.description === description_1; });
                        if (findSpecialty) {
                            return [2 /*return*/, response.status(401).json({
                                    error: 'Specialty already exist',
                                    Specialtys: allSpecialtys,
                                })];
                        }
                        return [4 /*yield*/, specialtys.create({
                                description: description_1,
                            })];
                    case 2:
                        newSpecialty = _a.sent();
                        return [2 /*return*/, response.json(newSpecialty)];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SpecialtyController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id_1, specialtys, allSpecialtys, findSpecialty, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id_1 = request.params.id;
                        specialtys = new Specialty();
                        return [4 /*yield*/, specialtys.list()];
                    case 1:
                        allSpecialtys = _a.sent();
                        findSpecialty = allSpecialtys.find(function (find) { return find.id === id_1; });
                        if (!findSpecialty) {
                            return [2 /*return*/, response.status(401).json({ error: 'Specialty ID not found!' })];
                        }
                        return [4 /*yield*/, specialtys.delete(id_1)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json({ success: 'deleted' })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(500).json({ error: 'Error' })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return SpecialtyController;
}());
exports.default = SpecialtyController;
