import { Request, Response } from "express";
import { CmsClient } from "../clients/cmsClient";

export class MobilesController {
    private client: CmsClient
    constructor(client: CmsClient) {
        this.client = client
    };

    public async getMobiles(req: Request, res: Response) {
        const data = await this.client.getMobiles();
        res.send(data.data);
    }

    public async getMobile(req: Request, res: Response) {
        const id = +req.params.id;
        const data = await this.client.getMobile(id);
        res.send(data.data);
    }

    public async deleteMobile(req: Request, res: Response) {
        const id = +req.params.id;
        try {
            await this.client.deleteMobile(id);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        };
    };

    public async postMobile(req: Request, res: Response) {
        const data = await this.client.postMobile();
        res.send(data.data);
    };

    public async updateMobile(req: Request, res: Response) {
        const id = +req.params.id;
        try {
            await this.client.updateMobile(id);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        };
    };
}