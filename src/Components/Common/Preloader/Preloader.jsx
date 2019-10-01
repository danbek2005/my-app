import React from 'react';
import classes from './../../Articles/Users/Users.module.css';


let Preloader = (props) => {
	return (
		<img src="./files/loading.svg" className={classes.Loading}/>
	)
}

export default Preloader; 