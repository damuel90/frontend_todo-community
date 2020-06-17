import React, { createContext, useReducer } from 'react';
import user from '../reducers/user';

export const Context = createContext();

const Provider = ({ children }) => {
    const [ userState, userDispatch ] = useReducer(user.reducer, user.initState);
    return (
        <Context.Provider value={{
            userState, 
            userDispatch 
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;