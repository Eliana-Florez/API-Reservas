"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ReservasSchema = new mongoose_1.Schema({
    codReserva: { type: Number, require: true },
    numPersonas: { type: String, require: true },
    fechaIngreso: { type: String, require: true },
    fechaSalida: { type: String, require: true },
    datosCliente: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Clientes',
            autopopulate: true,
        },
    ],
    infoHabitacion: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Habitaciones',
            autopopulate: true,
        },
    ],
});
ReservasSchema.plugin(require('mongoose-autopopulate'));
exports.default = (0, mongoose_1.model)("Reservas", ReservasSchema);
