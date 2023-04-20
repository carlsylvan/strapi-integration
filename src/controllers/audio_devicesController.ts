import { Request, Response } from "express";
import { CmsClient } from "../clients/cmsClient";

export class Audio_devicesController {
    private client: CmsClient
    constructor(client: CmsClient) {
        this.client = client
    };

    public async getAudio_devices(req: Request, res: Response) {
        const data = await this.client.getAudio_devices();
        res.send(data.data);
    }

    public async getAudio_device(req: Request, res: Response) {
        const id = +req.params.id;
        const data = await this.client.getAudio_device(id);
        res.send(data.data);
    }

    public async deleteAudio_device(req: Request, res: Response) {
        const id = +req.params.id;
        try {
            await this.client.deleteAudio_device(id);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        };
    };

    public async postAudio_device(req: Request, res: Response) {
        const data = await this.client.postAudio_device();
        res.send(data.data);
    };

    public async updateAudio_device(req: Request, res: Response) {
        const id = +req.params.id;
        try {
            await this.client.updateAudio_device(id);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        };
    };
}