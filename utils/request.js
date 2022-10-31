import { baseUrl } from '~/common-file/config';
import storage from '~/common-file/store/storage';

export default async function request({ url, data, method }) {
    const token = await storage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['authorization'] = token;
    }

    const response = await fetch(baseUrl + url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
    });

    return response.clone().json();
}
