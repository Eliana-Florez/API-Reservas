import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        codHabitacion: { type: Number, require: true },
        tipoHabitacion: { type: String, require: true },
        descripcion: { type: String, require: true },
        capacidad: { type: Number, require: true },
        tarifaPorNoche: { type: String, require: true },
        estado: { type: String, require: true},
    }
);

export default model("Habitaciones", PostSchema);
