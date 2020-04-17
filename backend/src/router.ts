import express, {Request, Response} from "express";
import { api } from "api";
import { decode } from "io-ts-promise";

export const router = (): Router => new Router();

class Router {
    expressRouter: express.Router

    constructor() {
        this.expressRouter = express.Router();
    }

    handleGet<Req, Res>(apiObject: api<Req, Res>, handler: (_: Req) => Promise<Res>) {
        this.expressRouter.get(apiObject.path, async (req: Request, res: Response) => {
            try {
                const request = await decode(apiObject.reqCodec, {...req.params, ...req.body})
                const result = await handler(request);
                res.status(200).send(result);
            } catch(e) {
                console.log(e.message);
                res.status(500).send();
            }
        });
    }
}
