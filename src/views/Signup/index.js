import React, { useContext } from 'react';
import { login } from '../../actions/user';
import { Context } from '../../context';
import history from '../../navigation/history';
import { LOGIN } from '../../constants/routes';
import { Row, Col } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import getBreakpoint from '../../utils/getBreakpoint';
import background from '../../assets/images/sign_in.svg'
import SignupForm from './SignupForm';

const Signup = props => {
    const { userDispatch } = useContext(Context)
    const screens = useBreakpoint();
    const breakpoint = getBreakpoint(screens, true);

    return (
        <Row justify='center' align='middle' style={{height:'calc(100% - 60px)',backgroundColor:'#fafafa'}}>
            <Col lg={14} md={12} xs={0} style={{padding:'0 20px'}}>
                <img src={background} style={{width:'100%'}}/>
            </Col>
            <Col lg={10} md={12} xs={24} style={{padding:breakpoint<1?'0 10px':'0 20px'}}>
               <SignupForm />
            </Col>
        </Row>
    );
};

export default Signup;
