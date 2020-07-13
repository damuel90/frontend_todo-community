import React from 'react';
import { login } from '../../actions/user';
import useStore from '../../customHooks/useStore';
import { Row, Col } from 'antd';
import { FORGOTPASSWORD } from '../../constants/routes';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import getBreakpoint from '../../utils/getBreakpoint';
import background from '../../assets/images/organizing_projects.svg'
import LoginForm from './LoginForm';

const Login = ({ history }) => {
    const [, dispatch] = useStore();
    const screens = useBreakpoint();
    const breakpoint = getBreakpoint(screens, true);

    const toForgot = () => history.push(FORGOTPASSWORD);

    const onLogin = (data, showMessage) => {
        showMessage({
            type: 'success', 
            content: `Bienvenido ${data.fullName}`,
            style: {marginTop: '60px', textTransform: 'capitalize'},
            duration: 2
        });
        const [name='', lastName=''] = data.fullName.toUpperCase().split(' ');
        const shortName = `${name.charAt(0)}${lastName.charAt(0)}`;
        const action = login({...data, shortName, isAuthenticated: true});
        dispatch(action);
    };

    return (
        <Row justify='center' align='middle' style={{height:'calc(100vh - 60px)',marginTop:'60px',backgroundColor:'#f5f5f5'}}>
            <Col lg={14} md={12} xs={0} style={{padding:'0 20px'}}>
                <img alt='back' src={background} style={{width:'100%'}}/>
            </Col>
            <Col lg={10} md={12} xs={24} style={{padding:breakpoint<1?'0 10px':'0 20px'}}>
                <LoginForm {...{onLogin, toForgot}} />
            </Col>
        </Row>
    );
};

export default Login;
