import { baseUrl } from '~/common-file/config';
import storage from '~/common-file/store/storage';

export default async function request({ url, data, method, isFormData }) {
    const token = await storage.getItem('token');
    console.log('🚀 ~ file: request.js ~ line 6 ~ request ~ token', token);
    const headers = {
        'Content-Type': isFormData ? false : 'application/json',
    };

    if (token) {
        headers['authorization'] = token;
    }

    const response = await fetch(baseUrl + url, {
        method,
        headers,
        body: data ? (isFormData ? data : JSON.stringify(data)) : undefined,
    });
    console.log('🚀 ~ file: request.js ~ line 25 ~ request ~ response', response);

    return response.clone().json();
}
