import { Router, Request, Response } from "express";
import reserva from "../controllers/reservas";


class reservasRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getReserva(req: Request, res: Response): Promise<void> {
        const reservas = await reserva.find().populate('datosCliente infoHabitacion');
        res.json(reservas);
    }


    public async postReserva(req: Request, res: Response): Promise<void> {
        const newReserva = new reserva(req.body);
        await newReserva.save();

        res.json({ status: res.status, data: newReserva });
    }

    public async putReserva(req: Request, res: Response): Promise<void> {
        const { codReserva } = req.body;
        const post = await reserva.findOneAndUpdate({ codReserva }, req.body);
        res.json({ status: res.status, data: post });
    }

    public async deleteReserva(req: Request, res: Response): Promise<void> {
        const { codReserva } = req.body;
        const post = await reserva.findOneAndRemove({ codReserva });
        res.json({ status: res.status, data: 'Reserva Eliminada' });
    }


    routes() {
        this.router.get("/", this.getReserva);
        this.router.post("/", this.postReserva);
        this.router.put("/", this.putReserva);
        this.router.delete("/", this.deleteReserva);
    }
}

const reservaRoutes = new reservasRoutes();

export default reservaRoutes.router;

