import React, { useState, useEffect, useMemo } from 'react';
import { Layout } from 'antd';
import Welcome from './Welcome';
import sortData from '../../utils/sortData';
import useStore from '../../customHooks/useStore';
import useProject from '../../customHooks/useProject';
import ProjectModal from './ProjectModal';
import ProjectList from './ProjectList';
import './styles.less';

const Home = () => {
    const [showModal, setShowModal] = useState({visible: false, project: null});
    const [{ user: { _id, token }, projects }, dispatch] = useStore();
    const [loading, projectMethods] = useProject(token, dispatch);
    
    const onModal = (visible, project=null) => setShowModal({ visible, project });
    
    useEffect(() => {
        if(projects.length === 0){
           projectMethods.get();
        }
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
                    onDelete={projectMethods.remove}
                    onSelect={projectMethods.select}
                />
            }
            <ProjectModal 
                loading={loading}
                showModal={showModal}
                onModal={onModal}
                createProject={projectMethods.create}
                updateProject={projectMethods.update}
            />
        </Layout.Content>
    );
};

export default Home;