import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from './components/navBar';
import BottomNavBar from './components/bottomNavBar';

const Layout = props => {
    return (
        <Fragment>
            <AppBar className="app-bar" />
            {props.children}
           <BottomNavBar className="bottom-navbar" {...props}/>          
        </Fragment>
    );
}


export default Layout


Layout.propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
};


