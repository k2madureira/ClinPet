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
describe('Medic', function () {
    it('Should be able create  a new medic', function () { return __awaiter(void 0, void 0, void 0, function () {
        var medic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .post('/medic')
                        .send({ name: '_MEDIC_', specialty_id: '_SPECIALTYID_' })];
                case 1:
                    medic = _a.sent();
                    expect(medic.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to create a new medic, with empty fields', function () { return __awaiter(void 0, void 0, void 0, function () {
        var medic_1, medic_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).post('/medic').send({ name: '' })];
                case 1:
                    medic_1 = _a.sent();
                    return [4 /*yield*/, supertest_1.default(app_1.default)
                            .post('/medic')
                            .send({ specialty_id: '' })];
                case 2:
                    medic_2 = _a.sent();
                    expect(medic_1.body).toHaveProperty('error');
                    expect(medic_2.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to create a new medic, with wrong specialty_id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var medic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .post('/medic')
                        .send({ name: '_NAME_', specialty_id: '_WRONG_' })];
                case 1:
                    medic = _a.sent();
                    expect(medic.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to update medic by id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var medic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .put('/medic/_MEDICID_')
                        .send({ name: '_UPDATED_' })];
                case 1:
                    medic = _a.sent();
                    expect(medic.body).toHaveProperty('id');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to update medic by wrong id', function () { return __awaiter(void 0, void 0, void 0, function () {
        var medic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default)
                        .put('/medic/_WRONG_')
                        .send({ name: '_UPDATED_' })];
                case 1:
                    medic = _a.sent();
                    expect(medic.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to delete medic', function () { return __awaiter(void 0, void 0, void 0, function () {
        var medic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).delete('/medic/_MEDICID_')];
                case 1:
                    medic = _a.sent();
                    expect(medic.body).toHaveProperty('success');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should not be able to delete medic with wrong ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var medic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).delete('/medic/_WRONG_')];
                case 1:
                    medic = _a.sent();
                    expect(medic.body).toHaveProperty('error');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should be able to list medics', function () { return __awaiter(void 0, void 0, void 0, function () {
        var medics;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(app_1.default).get('/medic')];
                case 1:
                    medics = _a.sent();
                    expect(medics.body).toHaveProperty('medics');
                    return [2 /*return*/];
            }
        });
    }); });
});
