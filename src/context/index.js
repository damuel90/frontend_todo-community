import React, { createContext, useReducer, useContext } from 'react';
import User from '../reducers/user';
import { Layout } from 'antd';

const Context = createContext();

const Provider = ({ children }) => {
    const [ user, userDispatch ] = useReducer(User.reducer, User.initState);
    
    return (
        <Layout>
            <Context.Provider value={{
                user, 
                userDispatch
            }}>
                {children}
            </Context.Provider>
        </Layout>
    );
};

export const useStore = () => {
    const { user, userDispatch } = useContext(Context);
    return {
        user,
        userDispatch
    }
}
export default Provider;