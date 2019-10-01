import React from 'react';
import classes from './../../Articles/Users/User/User.module.css';


let FollowPreloader = (props) => {
	return (
		<div className={classes.FollowPreloader}>
			<img src="./files/FollowPreloader.gif" className={classes.FollowPreloader}/>
		</div>
	)
}

export default FollowPreloader; 