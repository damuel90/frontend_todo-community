import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Badge, Button, Popover, Tooltip, AutoComplete, Input } from 'antd';
import { MenuUnfoldOutlined, PlusOutlined, BellFilled, ProjectFilled, NotificationFilled } from '@ant-design/icons';
import { HOME } from '../../constants/routes';
import MobileDrawer from './MobileDrawer';
import useStore from '../../customHooks/useStore';


const PrivateHeader = ({ navigation, navigate, breakpoint, out }) => {  
    const [{ user }] = useStore();
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
            <div style={{display:'flex'}} >
                <Tooltip title='Mis Proyecto'>
                    <Button size='large' style={{margin:0,padding:0,alignSelf:'center'}}  type='primary' icon={<ProjectFilled />} disabled={navigation===HOME} onClick={()=>navigate(HOME)}/>
                </Tooltip>
                <Tooltip title='Proyectos públicos'>
                    <Button size='large' style={{margin:'0 0 0 10px',padding:0,alignSelf:'center'}} type='primary' icon={<NotificationFilled />} />
                </Tooltip>
                <AutoComplete
                    dropdownMatchSelectWidth={252}
                    style={{ width: 300, margin:'0 0 0 10px' }}
                    //options={options}
                    //onSelect={onSelect}
                    //onSearch={handleSearch}
                >
                    <Input.Search size="large" placeholder="Buscar proyecto" enterButton />
                </AutoComplete>
            </div>
            <div style={{display:'flex',bottom:'7px'}}>
                <span style={{fontSize:'25px',fontWeight:'bold'}}>To Do</span>
                <span style={{fontSize:'12px'}}>community</span>
            </div>
            <div>
                <Tooltip title='Crear Proyecto'>
                    <Button size='large' style={{margin:'0 0 0 10px',padding:0}} type='dashed' icon={<PlusOutlined />} />
                </Tooltip>
                <Tooltip title='Notificaciones'>
                    <Badge dot={true}><Button size='large' style={{margin:'0 0 0 10px',padding:0}} type='primary' icon={<BellFilled />} /></Badge>
                </Tooltip>
                <Popover 
                    placement='bottomRight' 
                    trigger='click'
                    title={<span style={{textAlign:'center',display:'block',textTransform:'capitalize'}}>{user.fullName}</span>}
                    content={
                        <div style={{width:150,padding:0}}>
                            <Button size='middle' block type='text'>
                                <span style={{fontSize:'15px'}}>Perfil</span>
                            </Button>
                            <Button size='middle' block type='text' onClick={out}>
                                <span style={{fontSize:'15px'}}>Cerrar Sesión</span>
                            </Button>
                        </div>
                    } 
                >
                    <Avatar
                        size='large'
                        shape="square"
                        style={{bottom:'3px',fontSize:'18px',backgroundColor:user.avatar?'#fafafa':'#87d068',marginLeft:'10px',cursor:'pointer',border:'1px solid rgb(217,217,217)'}}
                        src={user.avatar}
                    >
                        {user.shortName}
                    </Avatar>
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

export default PrivateHeader;