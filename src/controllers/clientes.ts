import { Schema, model } from "mongoose";

const ClientesSchema = new Schema(
    {
        cedula: { type: Number, require: true },
        nombres: { type: String, require: true },
        apellidos: { type: String, require: true },
        telefono: { type: Number, require: true },
        email: { type: String, require: true, unique: true, lowercase: true },
    }
);

export default model("Clientes", ClientesSchema);
