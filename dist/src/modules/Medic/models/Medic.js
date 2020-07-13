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
var Medic = /** @class */ (function () {
    function Medic() {
        this.medics = [];
        this.medics = [];
        this.path = path_1.resolve(__dirname, '..', '..', '..', 'shared', 'database', process.env.NODE_ENV === 'test' ? 'fakes' : '', 'medics.json');
        this.loadJson();
    }
    Medic.prototype.loadJson = function () {
        // console.log(this.path);
        var data = fs_1.default.readFileSync(this.path);
        this.medics = JSON.parse(data.toString());
    };
    Medic.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.medics];
            });
        });
    };
    Medic.prototype.create = function (_a) {
        var name = _a.name, specialty_id = _a.specialty_id;
        return __awaiter(this, void 0, void 0, function () {
            var medic;
            return __generator(this, function (_b) {
                medic = {
                    id: uuidv4_1.uuid(),
                    name: name,
                    specialty_id: specialty_id,
                };
                this.medics.push(medic);
                fs_1.default.writeFileSync(this.path, JSON.stringify(this.medics, null, 2));
                return [2 /*return*/, medic];
            });
        });
    };
    Medic.prototype.update = function (_a) {
        var id = _a.id, name = _a.name, specialty_id = _a.specialty_id;
        return __awaiter(this, void 0, void 0, function () {
            var findMedicIndex, medic;
            return __generator(this, function (_b) {
                findMedicIndex = this.medics.findIndex(function (find) { return find.id === id; });
                medic = {
                    id: id,
                    name: name,
                    specialty_id: specialty_id,
                };
                this.medics[findMedicIndex] = medic;
                fs_1.default.writeFileSync(this.path, JSON.stringify(this.medics, null, 2));
                return [2 /*return*/, medic];
            });
        });
    };
    Medic.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var MedicIndex;
            return __generator(this, function (_a) {
                MedicIndex = this.medics.findIndex(function (find) { return find.id === id; });
                this.medics.splice(MedicIndex, 1);
                fs_1.default.writeFileSync(this.path, JSON.stringify(this.medics, null, 2));
                return [2 /*return*/];
            });
        });
    };
    Medic.prototype.truncate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var empty;
            return __generator(this, function (_a) {
                empty = this.medics.splice(0, this.medics.length);
                this.medics = empty;
                fs_1.default.writeFileSync(this.path, JSON.stringify(this.medics, null, 2));
                return [2 /*return*/];
            });
        });
    };
    return Medic;
}());
exports.default = Medic;
