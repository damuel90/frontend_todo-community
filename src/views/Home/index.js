import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { Layout, message as Message } from 'antd';
import Welcome from './Welcome';
import sortData from '../../utils/sortData';
import api from '../../services/api';
import { useStore } from '../../context';
import ProjectModal from './ProjectModal';
import ProjectList from './ProjectList';
import './styles.less';
import project from '../../reducers/project';
import { PROJECT_GET, PROJECT_CREATE, PROJECT_DELETE, PROJECT_UPDATE } from '../../constants/actions';

const Home = () => {
    const { user: { token, _id } } = useStore();
    const [loading, setLoading] = useState(true);
    const [projects, dispatch] = useReducer(project.reducer, project.initState);
    const [showModal, setShowModal] = useState({visible: false, project: null});
    
    const onModal = (visible, project=null) => setShowModal({ visible, project });

    const getProjects = async (params) => {
        const options = { key: PROJECT_GET, style: {marginTop:'60px'} };
        const hide = Message.loading({...options, content: 'Cargando Proyectos'});
        const { error, data } = await api.getUserProjects(params);
        setLoading(false);
        if(error){
            return Message.error({...options, content: data.message, duration: 2});
        }
        dispatch({ type: PROJECT_GET, payload: data });
        hide();
    };

    const createProject = async (project) => {
        setLoading(true);
        const { error, data } = await api.createProject({...project, token});
        setLoading(false);
        if(error){
            return Message.error({content: data.message, duration: 2, style: {marginTop:'60px'}});
        }
        dispatch({ type: PROJECT_CREATE, payload: data });
        onModal(false);
    };

    const updateProject = async (project) => {
        setLoading(true);
        const options = {key: PROJECT_UPDATE, style: {marginTop:'60px'}};
        Message.loading({...options, content: `Actualizando ${project.name}`, style: {marginTop:'60px', textTransform: 'capitalize'}});
        const { error, data } = await api.updateProject({...project, token});
        setLoading(false);
        if(error){
            return Message.error({...options, content: data.message, duration: 2});
        }
        Message.success({...options, content: data.message, duration: 2});
        dispatch({ type: PROJECT_UPDATE, payload: project });
        onModal(false);
    };

    const deleteProject = async ({ _id, name }) => {
        setLoading(true);
        const options = {key: PROJECT_DELETE, style: {marginTop:'60px'}};
        Message.loading({...options, content: `Eliminando ${name}`, style: {marginTop:'60px', textTransform: 'capitalize'}});
        const { error, data } = await api.deleteProject({projectId: _id, token});
        setLoading(false);
        if(error){
            return Message.error({...options, content: data.message, duration: 2});
        }
        Message.success({...options, content: data.message, duration: 2});
        dispatch({ type: PROJECT_DELETE, payload: _id });
    };

    useEffect(() => {
        getProjects({ token });
    }, []);
    
    let { created=[], collaborated=[] } = useMemo(()=>sortData(projects, _id), [projects, _id]);
    
    return (
        <Layout.Content className='home'>
            {projects.length === 0 ? 
                <Welcome 
                    loading={loading}
                    handlePlus={()=>onModal(true)} 
                />
                :
                <ProjectList 
                    created={created}
                    collaborated={collaborated}
                    onModal={onModal}
                    onDelete={deleteProject}
                />
            }
            <ProjectModal 
                loading={loading}
                showModal={showModal}
                onModal={onModal}
                createProject={createProject}
                updateProject={updateProject}
            />
        </Layout.Content>
    );
};

export default Home;