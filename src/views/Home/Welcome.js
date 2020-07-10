import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from 'antd';
import background from '../../assets/images/scrum_board.svg';
import './styles.less';

const { Title } = Typography;

const Welcome = ({ handlePlus, loading }) => (
    <div className='welcome'>
        {!loading &&
            <Fragment>
                <img alt='background' src={background} style={{width:'70%'}}/>
                <Title level={4} className='welcome_title'>
                    No tiene ningún proyecto ¡empieza creando uno!
                </Title>
                <Button size='middle' block type='primary' style={{width:'auto'}} onClick={handlePlus}>
                    Crear Proyecto
                </Button>
            </Fragment>
        }
    </div>
);

Welcome.propTypes = {
    loading: PropTypes.bool.isRequired, 
    handlePlus: PropTypes.func.isRequired
};

export default Welcome;

    