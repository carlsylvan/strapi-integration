import axios from "axios";

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
    public async postTelevision(): Promise<any> {
        const response = await client.post('/televisions');
        return response.data;
    }
    public async updateTelevision(id: number): Promise<any> {
        const response = await client.put(`/televisions/${id}`);
        return response.data;
    }

    //Audio_devices
    public async getAudio_devices(): Promise<any> {
        const response = await client.get('/audio-devices');
        return response.data;
    }
    public async getAudio_device(id: number): Promise<any> {
        const response = await client.get(`/audio-devices/${id}`);
        return response.data;
    }
    public async deleteAudio_device(id: number): Promise<any> {
        const response = await client.delete(`/audio-devices/${id}`);
        return response.data;
    }
    public async postAudio_device(): Promise<any> {
        const response = await client.post('/audio-devices');
        return response.data;
    }
    public async updateAudio_device(id: number): Promise<any> {
        const response = await client.put(`/audio-devices/${id}`);
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
    public async postComputer(): Promise<any> {
        const response = await client.post('/computers');
        return response.data;
    }
    public async updateComputer(id: number): Promise<any> {
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
    public async postMobile(): Promise<any> {
        const response = await client.post('/mobiles');
        return response.data;
    }
    public async updateMobile(id: number): Promise<any> {
        const response = await client.put(`/mobiles/${id}`);
        return response.data;
    }
}