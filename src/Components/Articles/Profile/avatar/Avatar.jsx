import React from 'react';
import classes from './Avatar.module.css';
var Avatar = (props) => {
	
	return (
		<div className={classes.Avatar}>
			<div className={classes.Avatar_img}>
				<img src={"https://danbek2005.github.io/my-app/files/avatar" + props.img + (".jpg" || ".png")}/>
			</div>
			<div className={classes.Avatar_User}>
			<div className = {`${classes.Avatar_User_Option} ${classes.Name}`}>Name:</div>
			<div>{props.name}</div>
			<hr />
			<div className = {`${classes.Avatar_User_Option} ${classes.Mail}`}>Mail</div>
			<div>{props.mail}</div>
			<hr />
			</div>
		</div>
	)
}
export default Avatar;