import React from 'react';
var Info = (props) => {
	return (
		<div className="profile-info d-flex">
			<div className="info-img">
				<img src={props.img}/>
			</div>
			<div className="info-name d-flex">
				<span className="info-name-label">Name:</span>
				<div><span>{props.name}</span></div>
			</div>
			<div className="info-mail d-flex">
				<span className="info-mail-label">Mail:</span>
				<div><span>{props.mail}</span></div>
			</div>
		</div>
	)
}
export default Info;