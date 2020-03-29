import React from 'react';
import { Typography, Toolbar, AppBar } from '@material-ui/core';

const NavBar = props => {
    return (
        <div>
            <AppBar position="fixed" style={{backgroundColor:'#121212'}} >
                <Toolbar>
                    <Typography style={{textShadow:'2px 1px #686868' , textAlign:'left'}} align='left' variant="h6"  color='inherit'>
                        Corona Live Statistics
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default NavBar
