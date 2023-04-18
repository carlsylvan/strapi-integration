import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:1337/api',
});

export class CmsClient {
    constructor () {};

    public async getTelevisions(): Promise<any> {
        const response = await client.get('/televisions');
        return response.data;
    }
}