import { API_URL } from '../config/config';

export const get = async endpoint => {
    const fetchResult = await fetch(`${API_URL}${endpoint}`);
    return fetchResult.json();
}

export const post = async (endpoint, params) => {
    const config = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: params,
    };
    const fetchResult = await fetch(`${API_URL}${endpoint}`, config);
    return fetchResult.json();
};