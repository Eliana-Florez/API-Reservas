"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    codHabitacion: { type: Number, require: true },
    tipoHabitacion: { type: String, require: true },
    descripcion: { type: String, require: true },
    capacidad: { type: Number, require: true },
    tarifaPorNoche: { type: String, require: true },
    estado: { type: String, require: true },
});
exports.default = (0, mongoose_1.model)("Habitaciones", PostSchema);
