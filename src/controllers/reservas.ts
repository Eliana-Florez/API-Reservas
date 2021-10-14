import { Schema, model } from "mongoose";


const ReservasSchema = new Schema(
    {
        codReserva: { type: Number, require: true },
        numPersonas: { type: String, require: true },
        fechaIngreso: { type: String, require: true },
        fechaSalida: { type: String, require: true },
        datosCliente: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Clientes',
            autopopulate: true,
            },
        ],
        infoHabitacion: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Habitaciones',
            autopopulate: true,
            },
        ],
    }
);

ReservasSchema.plugin(require('mongoose-autopopulate'));
export default model("Reservas", ReservasSchema);
