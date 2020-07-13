import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Divider, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProjectCard from './ProjectCard';

const ProjectList = ({ created, collaborated, onModal, onSelect, onDelete }) => {
    const handlePlus = () => onModal(true);

    const handleInvitation = () => {};

    const handleUpdate = (project) => (e) => {
        e.stopPropagation();
        onModal(true, project);
    };

    const handleDelete = (project) => (e) => {
        e.stopPropagation();
        onDelete(project);
    };

    const handleSelect = (project) => () => onSelect(project);

    return (
        <section className='home_projectList'>
            <Typography.Title type='secondary' ellipsis level={4} style={{flexBasis:'100%'}}>
                Proyectos creados:
            </Typography.Title>
            {created.map((project, index) => (
                <ProjectCard 
                    key={project._id} 
                    project={project} 
                    handleInvitation={handleInvitation}
                    handleUpdate={handleUpdate(project)}
                    handleDelete={handleDelete(project)}
                    handleSelect={handleSelect(project)}
                    created={true}
                />
            ))}
            <Card.Grid className='home_plus'>
                <Button onClick={handlePlus} style={{width:'100%',height:'100%'}} type='dashed' icon={<PlusOutlined style={{fontSize:30}} />} />
            </Card.Grid>
            <Divider />
            <Typography.Title type='secondary' ellipsis level={4} style={{flexBasis:'100%'}}>
                Proyectos donde colaboro:
            </Typography.Title>
            {collaborated.map((project, index) => (
                <ProjectCard 
                    key={project._id} 
                    project={project} 
                    created={false}
                />
            ))}
        </section>
        
    );
};

ProjectList.propTypes = {
    created: PropTypes.array.isRequired, 
    collaborated: PropTypes.array.isRequired, 
    onModal: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired, 
    onDelete: PropTypes.func.isRequired
};

export default ProjectList;