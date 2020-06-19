import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import validations from '../../validations';

const SignupForm = props => {
    const [loading, setLoading ] = useState(false);

    const onFinish = values => {
        setLoading(true)
        console.log(values);
    };

    return (
        <Card style={{maxWidth:400,margin:'0 auto'}}>
            <Typography.Title style={{textAlign:'center',margin:'20px 0 30px 0'}} level={4}>
                ¡Bienvenido!
            </Typography.Title>
            <Form
                size='large'
                name="normal_login"
                initialValues={{ remember: true }}
                style={{maxWidth:'320px', margin: '0 auto'}}
                onFinish={onFinish}
            >
                <Form.Item name="fullName" rules={validations.fullName}>
                    <Input  prefix={<UserOutlined />} placeholder="Nombre y Apellido" />
                </Form.Item>
                <Form.Item name="email" rules={validations.email}>
                    <Input  prefix={<MailOutlined />} placeholder="Correo Electronico" />
                </Form.Item>
                <Form.Item name="password" rules={validations.password}>
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Contraseña" />
                </Form.Item>
                <Form.Item name="confirm" dependencies={['password']} rules={validations.confirm}>
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Repetir Contraseña" />
                </Form.Item>
                <Form.Item style={{marginBottom:5}}>
                    <Button loading={loading} type="primary" htmlType="submit" style={{width:'100%'}}>
                        {!loading && 'Registrarse'}
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button style={{float:'right',fontSize:'14px',padding:0,margin:0,height:'auto'}} type='link'>
                        Terminos y Condiciones
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default SignupForm;