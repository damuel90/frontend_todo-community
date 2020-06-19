import React, { useState, useEffect, useContext } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import history from '../../navigation/history';
import { Context } from '../../context';
import PublicHeader from './PublicHeader';
import PrivateHeader from './PrivateHeader';
import getBreakpoint from '../../utils/getBreakpoint';

const Header = () => {
    const [ navigation, setNavigation ] = useState(history.location.pathname);
    const { userState: { isAuthenticated } } = useContext(Context);
    const screens = useBreakpoint();
    const breakpoint = getBreakpoint(screens, true);

    const onNavButtonEvent = (e) => {
        e.preventDefault();
        setNavigation(window.location.pathname)
    };

    useEffect(() => {
        window.addEventListener('popstate', onNavButtonEvent);
        return () => (
            window.removeEventListener('popstate', onNavButtonEvent)
        )
    }, []);

    const navigate = (route) => () => {
        setNavigation(route);
        history.push(route);
    };

    return (
        <header style={{...styles.header,padding:breakpoint<1?'0 10px':'0 20px'}}>
            {isAuthenticated ?
                <PrivateHeader {...{ navigate, navigation, breakpoint }}/> 
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
}

export default Header;