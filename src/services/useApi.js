import { useState } from 'react';
import apiRequest from '../utils/apiRequest';

export const useApi = (api) => {
    const [ loading, setLoading ] = useState(false);

    const request = async (params, callback=null) => {
        if(callback && (typeof callback !== 'function')){
            throw new Error(`Debe enviar una funcion como segundo paramentro, parametro enviado: ${callback}`);
        }
        setLoading(true);
        const data = await apiRequest(api(params));
        if(!data) return setLoading(false);
        callback(data, setLoading)
    };

    return [ loading, request ]
}

export default useApi;