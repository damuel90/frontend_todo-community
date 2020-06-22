import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import validations from '../../validations';
import api, { useApi } from '../../services/api';

const LoginForm = ({ onLogin, toForgot }) => {
    const [ loading, submit ] = useApi(api.login);

    const onFinish = async (values) => {
        submit(values, onLogin);
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
                    <Button disabled={loading} type="primary" htmlType="submit" style={{width:'100%'}}>
                        Iniciar Sesión
                    </Button>
                </Form.Item>
                <Form.Item>
                    ¿Olvidaste tu contraseña?
                    <Button onClick={toForgot} style={{float:'right',fontSize:'14px',padding:0,margin:0,height:'auto'}} type='link'>
                        Recuperar Contraseña
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default LoginForm;