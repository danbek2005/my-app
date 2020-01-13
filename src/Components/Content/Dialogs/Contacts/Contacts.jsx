import React from 'react';
import {NavLink} from 'react-router-dom';

var Contact = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className="dialogs-contact">
			<NavLink to={path}>{props.login}</NavLink>
		</div>
		);
	}

var Contacts = (props) => {
	let UserElements = props.users.map(user => <Contact login={user.login} id={user.id}/>);

	return (
		<div className="dialogs-contacts">
			{UserElements}
		</div>
		);
	}

	export default Contacts;
