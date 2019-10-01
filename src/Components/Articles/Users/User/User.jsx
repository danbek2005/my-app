import React from 'react';
import classes from './User.module.css';
import {NavLink}   from 'react-router-dom';

let User = (props) => {
	return (
		<div className={classes.User}>
			<div className={classes.User_Ava}>
				<div className={classes.User_Img}>
					<NavLink to={"/profile/" + props.id}>
						<img src={props.img}/>
					</NavLink>
				</div>
			<div className={classes.Follow}>
				{props.followElement}
			</div>
			</div>
			<div className={classes.User_Info}>
				<div className={classes.User_Name}>{props.fullname}</div>
				<div className={classes.User_Age}>{props.age}</div>
				<div className={classes.User_Location}>{props.location}</div>
			</div>
		</div>
	)
}

export default User;