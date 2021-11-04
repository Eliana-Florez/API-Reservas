import express from "express";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import http from 'http';

//import routes
import clienteRoutes from "./routes/cliente.routes";
import reservaRoutes from "./routes/reserva.routes";
import habitacionRoutes from "./routes/habitacion.routes";
import bookingRoutes from "./routes/booking.routes";


class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.urlencoded({ extended: false }));
        this.config();
        this.routes();
    }

    public config(): void {
        this.app.set("port", process.env.PORT || 4000);
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(compression());

        this.app.use((req, res, next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }

    public routes(): void {
        this.app.use("/api/clientes", clienteRoutes);
        this.app.use("/api/reservas", reservaRoutes);
        this.app.use("/api/habitaciones", habitacionRoutes);
        this.app.use("/api/bookings", bookingRoutes);

    }

    public start(): void {
        const httpServer = http.createServer(this.app);
        httpServer.listen(this.app.get("port"), () => {
            console.log("Server is listening on port ", this.app.get("port"));
        });
    }
}

export { Server };
