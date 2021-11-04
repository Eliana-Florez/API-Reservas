"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var contactoSchema = new mongoose_1.Schema({
    nombreUser: { type: String },
    emailUser: { type: String },
    telefonoUser: { type: Number },
    mensajeUser: { type: String },
}, {
    collection: "Contactenos",
});
exports.default = (0, mongoose_1.model)("Contactenos", contactoSchema);
