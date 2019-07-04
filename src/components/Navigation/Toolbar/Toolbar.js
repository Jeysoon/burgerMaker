import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div onClick={props.toggle}>MENU</div>
        <div className={classes.Logo}>
        <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
export default toolbar;