import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { message as Message } from 'antd';
import api from '../services/api';
import { 
    SELECT_PROJECT,
    GET_PROJECTS, 
    CREATE_PROJECT, 
    DELETE_PROJECT, 
    UPDATE_PROJECT 
} from '../constants/actions';
import { DASHBOARD } from '../constants/routes';

const useProject = (token, dispatch) => {
    const [loading, setLoading] = useState(false);
    const { push: navigate } = useHistory();

    const select = (project) => {
        dispatch({ type: SELECT_PROJECT, payload: project });
        navigate(DASHBOARD);
    };

    const get = async () => {
        setLoading(true);
        const options = { key: GET_PROJECTS, style: {marginTop:'60px'} };
        const hide = Message.loading({...options, content: 'Cargando Proyectos'});
        const { error, data } = await api.getUserProjects(token);
        setLoading(false);
        if(error){
            return Message.error({...options, content: data.message, duration: 2});
        }
        if(data.length > 0){
            dispatch({ type: GET_PROJECTS, payload: data });
        }
        hide();
    };

    const create = async (project) => {
        setLoading(true);
        const hide = Message.loading({style: {marginTop:'60px'}, content: 'Creando Proyecto'});
        const { error, data } = await api.createProject(project, token);
        setLoading(false);
        if(error){
            return Message.error({content: data.message, duration: 2, style: {marginTop:'60px'}});
        }
        dispatch({ type: CREATE_PROJECT, payload: data });
        select(data);
        hide();
    };

    const update = async (project) => {
        setLoading(true);
        const options = {key: UPDATE_PROJECT, style: {marginTop:'60px'}};
        Message.loading({...options, content: `Actualizando ${project.name}`, style: {marginTop:'60px', textTransform: 'capitalize'}});
        const { error, data } = await api.updateProject(project, token);
        setLoading(false);
        if(error){
            return Message.error({...options, content: data.message, duration: 2});
        }
        Message.success({...options, content: data.message, duration: 2});
        dispatch({ type: UPDATE_PROJECT, payload: project });
    };

    const remove = async ({ _id, name }) => {
        setLoading(true);
        const options = {key: DELETE_PROJECT, style: {marginTop:'60px'}};
        Message.loading({...options, content: `Eliminando ${name}`, style: {marginTop:'60px', textTransform: 'capitalize'}});
        const { error, data } = await api.deleteProject(_id, token);
        setLoading(false);
        if(error){
            return Message.error({...options, content: data.message, duration: 2});
        }
        Message.success({...options, content: data.message, duration: 2});
        dispatch({ type: DELETE_PROJECT, payload: _id });
    };

    return [
        loading,
        {
            select,
            get,
            create,
            update,
            remove
        }
    ]
};

export default useProject;