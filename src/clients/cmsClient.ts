import axios from "axios";
import { ITelevision } from "../models/ITelevision";
import { IAudio } from "../models/IAudio";
import { IComputer } from "../models/IComputer";
import { IMobile } from "../models/IMobile";

const client = axios.create({
    baseURL: 'http://localhost:1337/api',
});

export class CmsClient {
    constructor () {};

    //Televisions
    public async getTelevisions(): Promise<any> {
        const response = await client.get('/televisions');
        return response.data;
    }
    public async getTelevision(id: number): Promise<any> {
        const response = await client.get(`/televisions/${id}`);
        return response.data;
    }
    public async deleteTelevision(id: number): Promise<any> {
        const response = await client.delete(`/televisions/${id}`);
        return response.data;
    }

    public async postTelevision(television: ITelevision): Promise<any> {
        const response = await client.post('/televisions', television);
        return response.data;
    }
    public async updateTelevision(television: ITelevision, id: number): Promise<any> {
        const response = await client.put(`/televisions/${id}`, television);
        return response.data;
    }

    //Audio_devices
    public async getAudios(): Promise<any> {
        const response = await client.get('/audio-devices');
        return response.data;
    }
    public async getAudio(id: number): Promise<any> {
        const response = await client.get(`/audio-devices/${id}`);
        return response.data;
    }
    public async deleteAudio(id: number): Promise<any> {
        const response = await client.delete(`/audio-devices/${id}`);
        return response.data;
    }
    public async postAudio(audio: IAudio): Promise<any> {
        const response = await client.post('/audio-devices', audio);
        return response.data;
    }
    public async updateAudio(audio: IAudio, id: number): Promise<any> {
        const response = await client.put(`/audio-devices/${id}`, audio);
        return response.data;
    }

    //Computers
    public async getComputers(): Promise<any> {
        const response = await client.get('/computers');
        return response.data;
    }
    public async getComputer(id: number): Promise<any> {
        const response = await client.get(`/computers/${id}`);
        return response.data;
    }
    public async deleteComputer(id: number): Promise<any> {
        const response = await client.delete(`/computers/${id}`);
        return response.data;
    }
    public async postComputer(computer: IComputer): Promise<any> {
        const response = await client.post('/computers', computer);
        return response.data;
    }
    public async updateComputer(computer: IComputer, id: number): Promise<any> {
        const response = await client.put(`/computers/${id}`);
        return response.data;
    }

    //Mobiles
    public async getMobiles(): Promise<any> {
        const response = await client.get('/mobiles');
        return response.data;
    }
    public async getMobile(id: number): Promise<any> {
        const response = await client.get(`/mobiles/${id}`);
        return response.data;
    }
    public async deleteMobile(id: number): Promise<any> {
        const response = await client.delete(`/mobiles/${id}`);
        return response.data;
    }
    public async postMobile(mobile: IMobile): Promise<any> {
        const response = await client.post('/mobiles', mobile);
        return response.data;
    }
    public async updateMobile(mobile: IMobile, id: number): Promise<any> {
        const response = await client.put(`/mobiles/${id}`, mobile);
        return response.data;
    }
}