import React from 'react';
import classes from './Header.module.css';
import LoginForm from './Login.jsx';
var Header = (props) => {
	return (
		<div>
			<div className={classes.header}>
				<img className={classes.header_titleImg} src="http://localhost:3000/files/header.jpg"/>
			</div>
			<div className={classes.Auth}>
				{props.getAuthElements(props, classes)}
			</div>
		</div>
	)
}
export default Header;