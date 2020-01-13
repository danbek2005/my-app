import React from 'react';
import {NavLink}   from 'react-router-dom';
let User = (props) => {
	return (
		<div className="users-item">
			<div className="user-img">
				<NavLink to={"/profile/" + props.id}>
					<img src={props.img} />
				</NavLink>
				{props.followElement}
			</div>
			<div className="user-info">
				<div className="user-info-name">{props.name}</div>
				<div className="user-info-mail">{props.mail}</div>
			</div>
		</div>
	)
}

export default User;