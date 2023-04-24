import { Request, Response } from "express";
import { CmsClient } from "../clients/cmsClient";

export class AudiosController {
    private client: CmsClient
    constructor(client: CmsClient) {
        this.client = client
    };

    public async getAudios(req: Request, res: Response) {
        const data = await this.client.getAudios();
        res.send(data.data);
    }

    public async getAudio(req: Request, res: Response) {
        const id = +req.params.id;
        const data = await this.client.getAudio(id);
        res.send(data.data);
    }

    public async deleteAudio(req: Request, res: Response) {
        const id = +req.params.id;
        try {
            await this.client.deleteAudio(id);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        };
    };

    public async postAudio(req: Request, res: Response) {
        const data = await this.client.postAudio(req.body);
        res.send(data.data);
    };

    public async updateAudio(req: Request, res: Response) {
        const id = +req.params.id;
        try {
            await this.client.updateAudio(req.body, id);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        };
    };
}