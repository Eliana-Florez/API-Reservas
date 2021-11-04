import { Schema, model } from "mongoose";

let bookingSchema = new Schema(
    {
        nombresClient: { type: String, },
        apellidosClient: { type: String, },
        cedulaClient: { type: Number },
        ciudadOrigenClient: { type: String, },
        telefonoClient: { type: Number, },
        emailClient: { type: String, },
        numPersonas: { type: Number },
        infoHabitacion: [{type: String}],
        fechaIngreso: { type: String},
        fechaSalida: { type: String },
    },
    {
        collection: "Bookings",
    }
);

export default model("Bookings", bookingSchema);