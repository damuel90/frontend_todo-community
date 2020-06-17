import { LOGIN, LOGOUT } from '../constants/actions';

export const login = (payload) => ({
    type: LOGIN,
    payload
});

export const logout = () => ({
    type: LOGOUT
});