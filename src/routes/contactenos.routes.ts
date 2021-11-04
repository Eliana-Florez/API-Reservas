import { Router, Request, Response } from "express";
import mensaje from "../controllers/contactenos";


class contactenosRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getmensaje(req: Request, res: Response): Promise<void> {
        const mensajes = await mensaje.find();
        res.json(mensajes);
    }

    //GET by ID
    public async getmensajeID(req: Request, res: Response): Promise<void> {
        const mensajes = await mensaje.findById(req.params.id);
        res.json(mensajes);
    }


    public async postmensaje(req: Request, res: Response): Promise<void> {
        const newmensaje = new mensaje(req.body);
        await newmensaje.save();

        res.json({ status: res.status, data: newmensaje });
    }

    public async putmensaje(req: Request, res: Response): Promise<void> {
        const mensajePut = await mensaje.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            }
        );
        res.json({ status: res.status, data: mensajePut });
    }

    public async deletemensaje(req: Request, res: Response): Promise<void> {
        const mensajeDel = await mensaje.findByIdAndRemove(req.params.id);
        res.json({ status: res.status, data: 'Mensaje Eliminado' });
    }


    routes() {
        this.router.get("/", this.getmensaje);
        this.router.get("/:id", this.getmensajeID);
        this.router.post("/", this.postmensaje);
        this.router.put("/:id", this.putmensaje);
        this.router.delete("/:id", this.deletemensaje);
    }
}

const mensajeRoutes = new contactenosRoutes();

export default mensajeRoutes.router;

