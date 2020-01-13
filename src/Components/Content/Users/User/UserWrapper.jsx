import React from 'react';
import User from './User.jsx';

let UserWrapper = (props) => {
		return (
			<User followElement={props.followElement} img={props.img} mail={props.mail} name={props.name} id={props.id}/>
			)
}
export default UserWrapper