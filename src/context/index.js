import React, { createContext } from 'react';
import { Layout } from 'antd';

export const Context = createContext();

const Provider = ({ store, children }) => (
    <Layout>
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    </Layout>
);

export default Provider;