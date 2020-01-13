import React from 'react';
import Contacts from './Contacts/Contacts.jsx';
import Messages from './chat/Messages.jsx';
import { Redirect } from 'react-router-dom'

var Dialogs = (props) =>{
	return (
			<div className="main-dialogs">
				<Contacts users={props.dialogsPage.users}/>
				<Messages id={props.id} name={props.name} SendMessage={props.SendMessage} dialogsPage={props.dialogsPage}/>
			</div>
		);
	}

	export default Dialogs;
