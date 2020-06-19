import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Card, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import validations from '../../validations';

const LoginForm = props => {
    const [loading, setLoading ] = useState(false);

    const onFinish = values => {
        setLoading(true)
        console.log(values);
    };

    return (
        <Card style={{maxWidth:400,margin:'0 auto'}}>
            <Typography.Title style={{textAlign:'center',margin:'20px 0 30px 0'}} level={4}>
                ¡Inicia sesión para organizar y administrar tus proyecto!
            </Typography.Title>
            <Form
                size='large'
                name="normal_login"
                initialValues={{ remember: true }}
                style={{maxWidth:'320px', margin: '0 auto'}}
                onFinish={onFinish}
            >
                <Form.Item name="email" rules={validations.email}>
                    <Input  prefix={<MailOutlined />} placeholder="Correo Electronico" />
                </Form.Item>
                <Form.Item name="password" rules={validations.password}>
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Contraseña" />
                </Form.Item>
                <Form.Item style={{marginBottom:5}}>
                    <Button loading={loading} type="primary" htmlType="submit" style={{width:'100%'}}>
                        {!loading && 'Iniciar Sesión'}
                    </Button>
                </Form.Item>
                <Form.Item>
                    ¿Olvidaste tu contraseña?
                    <Button style={{float:'right',fontSize:'14px',padding:0,margin:0,height:'auto'}} type='link'>
                        Recuperar Contraseña
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

LoginForm.propTypes = {
    
};

export default LoginForm;