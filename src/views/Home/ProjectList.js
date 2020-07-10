import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Divider, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProjectCard from './ProjectCard';

const ProjectList = ({ created, collaborated, onModal, onDelete }) => {
    const handlePlus = () => onModal(true);

    const handleInvitation = () => {};

    const handleUpdate = (project) => () => onModal(true, project);

    const handleDelete = (project) => () => onDelete(project)

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
                    handleInvitation={handleInvitation}
                    handleUpdate={handleUpdate(project)}
                    handleDelete={handleDelete(project)}
                />
            ))}
        </section>
        
    );
};

ProjectList.propTypes = {
    created: PropTypes.array.isRequired, 
    collaborated: PropTypes.array.isRequired, 
    onModal: PropTypes.func.isRequired, 
    onDelete: PropTypes.func.isRequired
};

export default ProjectList;