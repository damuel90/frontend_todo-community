import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Badge, Drawer, Menu, Button  } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { HOME, DASHBOARD } from '../../constants/routes';

const MobileDrawer = ({ visible, onClose, navigation, navigate }) => {
    const [seleted, setSeleted] = useState(navigation);

    const onClick = ({ key }) => {
        if(key === HOME || key === DASHBOARD){
            navigate(key);
        }
        setSeleted(key);
        console.log(key)
    };

    return (
        <Drawer
            placement='left'
            width={256}
            bodyStyle={{padding:0}}
            headerStyle={{padding:0}}
            closable={false}
            onClose={onClose}
            visible={visible}
            title={
                <div style={{padding:'0 10px',height:'60px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Button size='small' type='link' style={{padding:0,margin:0,height:'35px'}}>
                        <MenuFoldOutlined onClick={onClose} style={{fontSize:'35px'}}/>
                    </Button>
                    <Avatar
                        size={40} 
                        style={{backgroundColor:'#fafafa',bottom:'3px'}}
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                </div>
            }
            footer={
                <div style={{display:'flex',bottom:'7px',margin:'0 auto',justifyContent:'center'}}>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>To Do</span>
                    <span style={{fontSize:'10px'}}>community</span>
                </div>
            }
        >
        <Menu
          onClick={onClick}
          style={{ width:256,margin:'0px' }}
          selectedKeys={[seleted]}
          mode="inline"
        >
            <Menu.Item key={HOME}>
                <span style={{fontSize:'15px'}}>Proyectos públicos</span>
            </Menu.Item>
            <Menu.Item key={DASHBOARD}>
                <span style={{fontSize:'15px'}}>Tablero</span>
            </Menu.Item>
            <Menu.Item key='noti'>
                <Badge dot={true} >
                    <span style={{fontSize:'15px'}}>Notificaciones</span>
                </Badge>
            </Menu.Item>
            <Menu.Item key='user'>
                <span style={{fontSize:'15px'}}>Perfil</span>
            </Menu.Item>
            <Menu.Item key='logout'>
                <span style={{fontSize:'15px'}}>Cerrar Sesión</span>
            </Menu.Item>
        </Menu>
    </Drawer>
    );
};

MobileDrawer.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default MobileDrawer;