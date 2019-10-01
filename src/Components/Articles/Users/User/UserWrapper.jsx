import React from 'react';
import User from './User.jsx';

let UserWrapper = (props) => {
		return (
			<User followElement={props.followElement} img={props.img} fullname={props.fullname} age={props.age} location={props.location} id={props.id}/>
			)
}
export default UserWrapper