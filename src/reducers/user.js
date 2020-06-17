import { getStorageUser, setStorageUser, deleteStorage } from '../services/storage';
import { LOGIN, LOGOUT } from '../constants/actions';

const defaultState = {
    isAuthenticated: false,
    token: '',
    _id: ''
}
  
const initState = getStorageUser() || defaultState;
  
const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            setStorageUser(action.payload);
            return {...action.payload};
        case LOGOUT:
            deleteStorage();
            return defaultState;
        default:
            throw new Error();
    }
};

export default {
    reducer,
    initState
};