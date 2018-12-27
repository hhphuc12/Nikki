import { get, post } from './request';

export const getAll = page => {
    return get(`get-all?page=${page || 0}`);
}