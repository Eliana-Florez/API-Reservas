import { Router, Request, Response } from "express";
import reserva from "../controllers/bookings";


class bookingsRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getReserva(req: Request, res: Response): Promise<void> {
        const reservas = await reserva.find();
        res.json(reservas);
    }

    //GET by ID
    public async getReservaID(req: Request, res: Response): Promise<void> {
        const reservas = await reserva.findById(req.params.id);
        res.json(reservas);
    }


    public async postReserva(req: Request, res: Response): Promise<void> {
        const newReserva = new reserva(req.body);
        await newReserva.save();

        res.json({ status: res.status, data: newReserva });
    }

    public async putReserva(req: Request, res: Response): Promise<void> {
        const reservaPut = await reserva.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            }
        );
        res.json({ status: res.status, data: reservaPut });
    }

    public async deleteReserva(req: Request, res: Response): Promise<void> {
        const reservaDel = await reserva.findByIdAndRemove(req.params.id);
        res.json({ status: res.status, data: 'Reserva Eliminada' });
    }


    routes() {
        this.router.get("/", this.getReserva);
        this.router.get("/:id", this.getReservaID);
        this.router.post("/", this.postReserva);
        this.router.put("/:id", this.putReserva);
        this.router.delete("/:id", this.deleteReserva);
    }
}

const bookingRoutes = new bookingsRoutes();

export default bookingRoutes.router;

