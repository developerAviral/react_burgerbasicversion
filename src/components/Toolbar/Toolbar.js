import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo.js';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <div>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
        </div>
        <div className={classes.Logo}>
               <Logo />
        </div> 
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;