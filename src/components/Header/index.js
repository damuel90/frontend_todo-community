import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import useStore from '../../customHooks/useStore';
import PublicHeader from './PublicHeader';
import PrivateHeader from './PrivateHeader';
import getBreakpoint from '../../utils/getBreakpoint';
import { logout } from '../../actions/user';

const Header = () => {
    const [{ user: { isAuthenticated } }, dispatch] = useStore();
    const { pathname: navigation } = useLocation();
    const { push: navigate } = useHistory();
    const screens = useBreakpoint();
    const breakpoint = getBreakpoint(screens, true);
    
    const out = () => {
        const action = logout();
        dispatch(action);
    };
    
    return (
        <section style={{position:'fixed',top:0,left:0,width:'100%',zIndex:1000}}>
            <header style={{...styles.header,padding:breakpoint<1?'0 10px':'0 20px'}}>
                {isAuthenticated ?
                    <PrivateHeader {...{ navigate, navigation, breakpoint, out }}/> 
                    : 
                    <PublicHeader {...{ navigate, navigation, breakpoint }}/>
                }
            </header>
        </section>
    );
};

const styles = {
    header: {
        backgroundColor:'white',
        height:'60px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        boxShadow:'0px 1px 5px rgba(0,0,0,.3)',
    }
};

export default Header;