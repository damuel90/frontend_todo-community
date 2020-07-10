import { useState } from 'react';
import { message as Message } from "antd";

const message = (key) => ({ type='info', content, duration, style={} }) => (
    Message[type]({key, content, duration, style: {marginTop:'60px', ...style}})
);

export const useApi = (api) => {
    const [ loading, setLoading ] = useState(false);

    const request = async (params, callback=null) => {
        if(callback && (typeof callback !== 'function')){
            throw new Error(`Debe enviar una funcion como segundo paramentro, parametro enviado: ${callback}`);
        }
        setLoading(true);
        const showMessage = message(`apiMessage${Math.random()*Date.now()}`);
        const hideMessage = showMessage({type: 'loading', content: 'Cargando'});
        const { error, data } = await api(params);
        if(error){
            showMessage({type: 'error', content: data.message, duration: 2});
            return setLoading(false);
        }
        return callback(data, showMessage, hideMessage, setLoading);
    };

    return [ request, loading ];
};

export default useApi;