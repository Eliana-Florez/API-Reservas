"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bookingSchema = new mongoose_1.Schema({
    nombresClient: { type: String, },
    apellidosClient: { type: String, },
    cedulaClient: { type: Number },
    ciudadOrigenClient: { type: String, },
    telefonoClient: { type: Number, },
    emailClient: { type: String, },
    numPersonas: { type: Number },
    infoHabitacion: [{ type: String }],
    fechaIngreso: { type: String },
    fechaSalida: { type: String },
}, {
    collection: "Bookings",
});
exports.default = (0, mongoose_1.model)("Bookings", bookingSchema);
