import { 
    PROJECT_CREATE, 
    PROJECT_GET, 
    PROJECT_UPDATE,
    PROJECT_DELETE 
} from '../constants/actions';

const initState = [];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case PROJECT_CREATE:
            return [...state, action.payload];
        case PROJECT_GET:
            return action.payload;
        case PROJECT_UPDATE:
            return state.reduce((acum, elem) => {
                if(elem._id === action.payload._id){
                     return [...acum, {...elem, ...action.payload}];
                }
                return [...acum, elem];
            }, []);
        case PROJECT_DELETE:
            return state.filter((elem) => elem._id !== action.payload);
        default:
            throw new Error();
    }
};

export default {
    initState,
    reducer
};