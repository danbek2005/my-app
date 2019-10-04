import React from 'react';
import classes from './Header.module.css';
import LoginForm from './Login.jsx';
import headerImg from './../../../public/files/header.jpg';
var Header = (props) => {
	return (
		<div>
			<div className={classes.header}>
				<img className={classes.header_titleImg} src={headerImg}/>
			</div>
			<div className={classes.Auth}>
				{props.getAuthElements(props, classes)}
			</div>
		</div>
	)
}
export default Header;