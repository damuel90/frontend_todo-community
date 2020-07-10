import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select, Button, Form, Input, Spin } from 'antd';
import themes from '../../constants/cardTheme';
import ThemeCheckbox from '../ThemeCheckbox';
import validations from '../../validations';
import './styles.less';

const ProjectForm = ({ onFinish, loading, update, visible }) => {
    const [form] = Form.useForm();
    
    useEffect(() => {
        if(!visible) return form.resetFields(); 
        if(update) return form.setFieldsValue(update);
    }, [update, visible]);

    return (
        <Form
            size='large'
            name="create_project"
            form={form}
            style={{maxWidth:'100%',margin:'0 auto',padding:'0 20px'}}
            onFinish={onFinish}
        >
            <Form.Item name="name" rules={validations.name}>
                <Input placeholder="Nombre"  />
            </Form.Item>
            <Form.Item name="type" rules={validations.type}>
                <Select placeholder="Tipo">
                    <Select.Option value="public">Público</Select.Option>
                    <Select.Option value="private">Privado</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="description">
                <Input.TextArea placeholder="Descripción" />
            </Form.Item>
            <Form.Item name="theme" className='projectForm_item'>
                <ThemeCheckbox themes={themes} />
            </Form.Item>
            <Form.Item style={{marginBottom:5}}>
                <Spin spinning={loading}>
                    <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                        {update ?
                            <span>{!loading && 'Actualizar'}</span>
                            :
                            <span>{!loading && 'Crear'}</span>
                        }
                    </Button>
                </Spin>
            </Form.Item>
        </Form>
    );
};

ProjectForm.propTypes = {
    onFinish: PropTypes.func.isRequired, 
    loading: PropTypes.bool.isRequired 
};

export default ProjectForm;