import request from './request';

export const fetchUsers = () => {
    return request.get('/users');
};