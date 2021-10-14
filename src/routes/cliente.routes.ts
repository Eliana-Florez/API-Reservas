import { Router, Request, Response } from "express";

import Post from "../controllers/clientes";

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
        const { cedula, nombres, apellidos, telefono, email } = req.body;
        const newPost = new Post({  cedula, nombres, apellidos, telefono, email });
        await newPost.save();

        res.json({ status: res.status, data: newPost });
    }

    public async putPosts(req: Request, res: Response): Promise<void> {

        const { cedula } = req.body;

        const post = await Post.findOneAndUpdate({ cedula }, req.body);

        res.json({ status: res.status, data: post });
    }

    public async deletePosts(req: Request, res: Response): Promise<void> {
        const { cedula } = req.body;
        const post = await Post.findOneAndRemove({ cedula });
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

