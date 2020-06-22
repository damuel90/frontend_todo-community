import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Context } from '../../context';
import PublicHeader from './PublicHeader';
import PrivateHeader from './PrivateHeader';
import getBreakpoint from '../../utils/getBreakpoint';
import { logout } from '../../actions/user';

const Header = () => {
    const { userState: { isAuthenticated }, userDispatch } = useContext(Context);
    const { pathname: navigation } = useLocation();
    const { push: navigate } = useHistory();
    const screens = useBreakpoint();
    const breakpoint = getBreakpoint(screens, true);
    
    const out = () => {
        const action = logout();
        userDispatch(action);
    };

    return (
        <header style={{...styles.header,padding:breakpoint<1?'0 10px':'0 20px'}}>
            {isAuthenticated ?
                <PrivateHeader {...{ navigate, navigation, breakpoint, out }}/> 
                : 
                <PublicHeader {...{ navigate, navigation, breakpoint }}/>
            }
        </header>
    );
};

const styles = {
    header: {
        backgroundColor:'white',
        height:'60px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
};

export default Header;