import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Badge, Button, Popover } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { HOME, DASHBOARD } from '../../constants/routes';
import MobileDrawer from './MobileDrawer';


const PrivateHeader = ({ navigation, navigate, breakpoint, out }) => {  
    const [showDrawer, setShowDrawer] = useState(false);  
    const onShowDrawer = () => setShowDrawer(!showDrawer);
    
    if(breakpoint < 1){
        return (
            <Fragment>
                <Button size='small' type='link' style={{padding:0,margin:0,height:'35px'}} onClick={onShowDrawer}>
                    <MenuUnfoldOutlined style={{fontSize:'35px'}} />
                </Button>
                <MobileDrawer 
                    visible={showDrawer} 
                    onClose={onShowDrawer} 
                    {...{navigate, navigation, out}}
                />
            </Fragment>
        )
    };

    return (
        <Fragment>
            <div style={{display:'flex',bottom:'7px'}}>
                <span style={{fontSize:'25px',fontWeight:'bold'}}>To Do</span>
                <span style={{fontSize:'12px'}}>community</span>
            </div>
            <div>
                <Button size='small' type='link' disabled={navigation===HOME} onClick={()=>navigate(HOME)}>
                    <span style={{fontSize:'15px'}}>Proyectos públicos</span>
                </Button>
                <Button size='small' type='link' disabled={navigation===DASHBOARD} onClick={()=>navigate(DASHBOARD)}>
                    <span style={{fontSize:'15px'}}>Tablero</span>
                </Button>
                <Popover 
                    placement='bottomRight' 
                    trigger='click'
                    content={
                        <div style={{width:150,padding:0}}>
                            <Button size='middle' block type='text'>
                                <span style={{fontSize:'15px'}}>Perfil</span>
                            </Button>
                            <Button size='middle' block type='text'>
                                <Badge dot={true} >
                                    <span style={{fontSize:'15px'}}>Notificaciones</span>
                                </Badge>
                            </Button>
                            <Button size='middle' block type='text' onClick={out}>
                                <span style={{fontSize:'15px'}}>Cerrar Sesión</span>
                            </Button>
                        </div>
                    } 
                >
                    <Badge dot={true} offset={[-5, 5]}>
                        <Avatar
                            size={45} 
                            style={{bottom:'3px',backgroundColor:'#fafafa',marginLeft:'5px',cursor:'pointer'}}
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                    </Badge>
                </Popover>   
            </div>           
        </Fragment>
    );
};

PrivateHeader.propTypes = {
    navigation: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
    breakpoint: PropTypes.number
};

/*
<Fragment>
            <div style={{display:'flex',bottom:'7px'}}>
                <span style={{fontSize:'25px',fontWeight:'bold'}}>To Do</span>
                <span style={{fontSize:'12px'}}>community</span>
            </div>
            <div>
                <Button size='small' type='link' disabled={navigation===HOME} onClick={()=>navigate(HOME)}>
                    <span style={{fontSize:'15px'}}>Proyectos públicos</span>
                </Button>
                <Button size='small' type='link' disabled={navigation===DASHBOARD} onClick={()=>navigate(DASHBOARD)}>
                    <span style={{fontSize:'15px'}}>Tablero</span>
                </Button>
                <Popover 
                    placement='bottomRight' 
                    trigger='click'
                    content={
                        <div style={{width:150,padding:0}}>
                            <Button size='middle' block type='text'>
                                <span style={{fontSize:'15px'}}>Perfil</span>
                            </Button>
                            <Button size='middle' block type='text'>
                                <Badge dot={true} >
                                    <span style={{fontSize:'15px'}}>Notificaciones</span>
                                </Badge>
                            </Button>
                            <Button size='middle' block type='text' onClick={out}>
                                <span style={{fontSize:'15px'}}>Cerrar Sesión</span>
                            </Button>
                        </div>
                    } 
                >
                    <Badge dot={true} offset={[-5, 5]}>
                        <Avatar
                            size={45} 
                            style={{bottom:'3px',backgroundColor:'#fafafa',marginLeft:'5px',cursor:'pointer'}}
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                    </Badge>
                </Popover>   
            </div>           
        </Fragment>
*/

export default PrivateHeader;