import { Schema, model } from "mongoose";

let contactoSchema = new Schema(
    {
        nombreUser: { type: String },
        emailUser: { type: String },
        telefonoUser: { type: Number},
        mensajeUser: { type: String },
    },
    {
        collection: "Contactenos",
    }
);

export default model("Contactenos", contactoSchema);