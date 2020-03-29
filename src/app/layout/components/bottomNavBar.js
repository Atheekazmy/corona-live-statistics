import React, { Fragment } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Public, Room, HomeWork } from '@material-ui/icons';
import { PageType } from '../../../core/enums/pageType';

const BottomNavBar = props => {
    return (
        <Fragment>
            <div className="root">
                <BottomNavigation showLabels={true} style={{backgroundColor:'#121212'}} >
                    <BottomNavigationAction label="Srilanka" icon={<Room />} onClick={() => props.onChange(PageType.Local)} />
                    <BottomNavigationAction label="Gloabal" icon={<Public />} onClick={() => props.onChange(PageType.Global)} />
                    <BottomNavigationAction label="Hospitalized" icon={<HomeWork />} onClick={() => props.onChange(PageType.HospitalDetails)} />
                </BottomNavigation>               
            </div>
            <div className='copyright text-center'>Developed By Atheek Azmy</div>
           
        </Fragment>

    )
}

export default BottomNavBar
