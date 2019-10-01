import React from 'react';
import classes from './Menu.module.css';
import {NavLink} from 'react-router-dom';



var Menu = () => {

	return (

		<div className={classes.menu}>
			<div className={classes.menu_item}>
			<NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
			</div>
			<div className={classes.menu_item}>
			<NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
			</div>
			<div className={classes.menu_item}>
			<NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
			</div>
			<div className={classes.menu_item}>
			<NavLink to="/news" activeClassName={classes.active}>News</NavLink>
			</div>
			<div className={classes.menu_item}>
			<NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
			</div>
			<div className={classes.menu_item}>
			<NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
			</div>
		</div>
	)
}
export default Menu;