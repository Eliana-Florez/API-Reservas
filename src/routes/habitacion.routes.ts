import { Router, Request, Response } from "express";

import Post from "../controllers/habitaciones";

class postsRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getPosts(req: Request, res: Response): Promise<void> {

        const get = await Post.find();
        res.json({ Post: get });
    }

    public async postPosts(req: Request, res: Response): Promise<void> {
        const { codHabitacion, tipoHabitacion, descripcion, capacidad, tarifaPorNoche, estado } = req.body;
        const newPost = new Post({ codHabitacion, tipoHabitacion, descripcion, capacidad, tarifaPorNoche, estado  });
        await newPost.save();

        res.json({ status: res.status, data: newPost });
    }

    public async putPosts(req: Request, res: Response): Promise<void> {

        const { codHabitacion } = req.body;

        const post = await Post.findOneAndUpdate({ codHabitacion }, req.body);

        res.json({ status: res.status, data: post });
    }

    public async deletePosts(req: Request, res: Response): Promise<void> {
        const { codHabitacion } = req.body;
        const post = await Post.findOneAndRemove({ codHabitacion });
        res.json({ status: res.status, data: post });
    }


    routes() {
        this.router.get("/", this.getPosts);
        this.router.post("/", this.postPosts);
        this.router.put("/", this.putPosts);
        this.router.delete("/", this.deletePosts);
    }
}

const postRoutes = new postsRoutes();

export default postRoutes.router;


