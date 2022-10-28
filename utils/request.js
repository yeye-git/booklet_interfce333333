import { baseUrl } from '~/common-file/config';

export default async function request({ url, data, method }) {
    const response = await fetch(baseUrl + url, {
        method,
        body: data ? JSON.stringify(data) : undefined,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrer: 'no-referrer',
    });

    return response.json();
}
