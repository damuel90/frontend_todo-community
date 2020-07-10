import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { Layout, Typography, Divider } from 'antd';

const sideRoutes = {
    GET_PROJECT: 'Proyectos',
    CREATE_PROJECT: 'Crear Proyecto',
    EDIT_PROJECT: 'Editar Proyecto'
}

const Sider = props => {
    const [side] = useState(sideRoutes.GET_PROJECT);

    return (
        <Layout.Sider theme='light' width={300}>
            <Typography.Title style={{textAlign:'center'}} level={4}>
                {side}
            </Typography.Title>
            <Divider style={{margin:0}} />
    
        </Layout.Sider>
    );
};

/*Sider.propTypes = {
    
};*/

export default Sider;