import React from 'react';
import classes from './Avatar.module.css';
var Avatar = (props) => {
	
	return (
		<div className={classes.Avatar}>
			<div className={classes.Avatar_img}>
				<img src={"http://localhost:3000/files/" + props.img}/>
			</div>
			<div className={classes.Avatar_User}>
			<div className = {`${classes.Avatar_User_Option} ${classes.Name}`}>Name:</div>
			<div>{props.name}</div>
			<hr />
			<div className = {`${classes.Avatar_User_Option} ${classes.Surname}`}>SurName:</div>
			<div>{props.surname}</div>
			<hr />
			<div className = {`${classes.Avatar_User_Option} ${classes.Age}`}>Age:</div>
			<div>{props.age}</div>
			<hr />
			<div className = {`${classes.Avatar_User_Option} ${classes.Location}`}>Location:</div>
			<div>{props.city + ' / ' + props.country}</div>
			<hr />
			</div>
		</div>
	)
}
export default Avatar;