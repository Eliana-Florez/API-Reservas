"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ClientesSchema = new mongoose_1.Schema({
    cedula: { type: Number, require: true },
    nombres: { type: String, require: true },
    apellidos: { type: String, require: true },
    telefono: { type: Number, require: true },
    email: { type: String, require: true, unique: true, lowercase: true },
});
exports.default = (0, mongoose_1.model)("Clientes", ClientesSchema);
