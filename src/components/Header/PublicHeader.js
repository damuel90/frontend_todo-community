import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { LANDING, LOGIN, SIGNUP } from '../../constants/routes';

const PublicHeader = ({ navigation, navigate, breakpoint }) => (
    <Fragment>
        <Button size='small' type='link' style={{display:'flex',bottom:'7px',height:breakpoint<1?'15px':'25px'}} onClick={()=>navigate(LANDING)}>
            <span style={{fontSize:breakpoint<1?'15px':'25px',fontWeight:'bold'}}>To Do</span>
            <span style={{fontSize:breakpoint<1?'10px':'12px'}}>community</span>
        </Button>
        <div>
            <Button size='small' type='link' disabled={navigation===LOGIN} onClick={()=>navigate(LOGIN)}>
                <span style={{fontSize:'15px'}}>Iniciar sesión</span>
            </Button>
            <Button size='small' type='link' disabled={navigation===SIGNUP} onClick={()=>navigate(SIGNUP)}>
                <span style={{fontSize:'15px'}}>Registrarse</span>
            </Button>
        </div>                 
    </Fragment>
)
PublicHeader.propTypes = {
    navigation: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
    breakpoint: PropTypes.number
};

export default PublicHeader;