import { 
    GET_PROJECTS, 
    CREATE_PROJECT, 
    UPDATE_PROJECT,
    DELETE_PROJECT,
    LOGOUT
} from '../constants/actions';
import { getStorageProjects, setStorageProjects } from '../services/storage';

const defaultState = [];
  
const initState = getStorageProjects() || defaultState;

const projects = (state = initState, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            setStorageProjects(action.payload)
            return action.payload;
        case CREATE_PROJECT:
            const newState = [...state, action.payload]
            setStorageProjects(newState);
            return newState;
        case UPDATE_PROJECT:
            const updatedState = state.reduce((acum, elem) => {
                if(elem._id === action.payload._id){
                     return [...acum, {...elem, ...action.payload}];
                }
                return [...acum, elem];
            }, []);
            setStorageProjects(updatedState);
            return updatedState;
        case DELETE_PROJECT:
            const filteredProjects = state.filter((elem) => elem._id !== action.payload);
            setStorageProjects(filteredProjects);
            return filteredProjects;
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
};

export default projects;