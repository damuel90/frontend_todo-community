import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import ProjectForm from '../../components/ProjectForm';

const ProjectModal = ({ loading, showModal, onModal, createProject, updateProject }) => {
    const onCancel = () => {
        if(loading) return;
        onModal(false);
    };

    const onFinish = (values) => {
        if(showModal.project){
            const { _id } = showModal.project;
            updateProject({...values, _id})
        } else {
            createProject(values)
        }
    };

    return (
        <Modal
            title="Crear Proyecto"
            visible={showModal.visible}
            onCancel={onCancel}
            footer={null}
            closable={!loading}
        >
          <ProjectForm onFinish={onFinish} visible={showModal.visible} loading={loading} update={showModal.project} />
        </Modal>
    );
};

ProjectModal.propTypes = {
    loading: PropTypes.bool.isRequired, 
    showModal: PropTypes.object.isRequired, 
    onModal: PropTypes.func.isRequired, 
    createProject: PropTypes.func.isRequired
};

export default ProjectModal;