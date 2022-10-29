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
    console.log('🚀 ~ file: request.js ~ line 10 ~ request ~ headers', headers);

    const response = await fetch(baseUrl + url, {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers,
        redirect: 'follow',
        referrer: 'no-referrer',
        body: data ? JSON.stringify(data) : undefined,
    });

    return response.clone().json();
}
