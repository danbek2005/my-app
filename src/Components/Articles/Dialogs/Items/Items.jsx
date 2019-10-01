import React from 'react';
import classes from './Items.module.css';
import {NavLink} from 'react-router-dom';

var Item = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={classes.Item}>
		<NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
		<hr />
		</div>
		);
	}

var Items = (props) => {
	let UserElements = props.users.map(user => <Item name={user.name} id={user.id}/>);

	return (
		<div className={classes.Items}>
			{UserElements}
		</div>
		);
	}

	export default Items;
