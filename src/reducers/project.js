import { 
    SELECT_PROJECT, 
    UPDATE_PROJECT, 
    DELETE_PROJECT, 
    LOGOUT 
} from '../constants/actions';
import { 
    setStorageProject, 
    getStorageProject, 
    removeStorageProject 
} from '../services/storage';

const defaultState = null;

const initState = getStorageProject() || defaultState;

const project = (state=initState, action) => {
    switch (action.type) {
        case SELECT_PROJECT:
            setStorageProject(action.payload);
            return action.payload;
        case UPDATE_PROJECT:
            if(state._id === action.payload._id){
                const updatedState = {...state, ...action.payload};
                setStorageProject(updatedState);
                return updatedState;
            }
            return state;
        case DELETE_PROJECT:
            if(state._id === action.payload){
                removeStorageProject();
                return defaultState;
            }
            return state;
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
};

export default project;