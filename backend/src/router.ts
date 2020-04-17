import express, {Request, Response} from "express";
import { api } from "api";

export const router = (): Router => new Router();

class Router {
    expressRouter: express.Router

    constructor() {
        this.expressRouter = express.Router();
    }

    handleGet<T>(apiObject: api<T>, handler: () => Promise<T>) {
        this.expressRouter.get(apiObject.path, async (req: Request, res: Response) => {
            try {
                const result = await handler();
                res.status(200).send(result);
            } catch(e) {
                console.log(e.message);
                res.status(500).send();
            }
        });
    }
}
