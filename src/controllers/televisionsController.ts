import { Request, Response } from "express";
import { CmsClient } from "../clients/cmsClient";

export class TelevisionsController {
    private client: CmsClient
    constructor(client: CmsClient) {
        this.client = client
    };

    public async getTelevisions(req: Request, res: Response) {
        const data = await this.client.getTelevisions();
        res.send(data.data);
    }

    public async getTelevision(req: Request, res: Response) {
        const id = +req.params.id;
        const data = await this.client.getTelevision(id);
        res.send(data.data);
    }

    public async deleteTelevision(req: Request, res: Response) {
        const id = +req.params.id;
        try {
            await this.client.deleteTelevision(id);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        };
    };

    public async postTelevision(req: Request, res: Response) {
        try {
            const data = await this.client.postTelevision(req.body);
            res.send(data);
        } catch (error) {
            res.sendStatus(500);
        }
    }

    public async updateTelevision(req: Request, res: Response) {
        const id = +req.params.id;
        try {
            await this.client.updateTelevision(id);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        };
    };
}