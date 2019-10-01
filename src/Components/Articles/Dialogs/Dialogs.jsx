import React from 'react';
import classes from './Dialogs.module.css';
import Items from './Items/Items.jsx';
import Messages from './Messages/Messages.jsx';
import { Redirect } from 'react-router-dom'

var Dialogs = (props) =>{
	return (
			<div className={classes.Dialogs}>
				<Items users={props.dialogsPage.users}/>
				<Messages SendMessage={props.SendMessage} dialogsPage={props.dialogsPage}/>
			</div>
		);
	}

	export default Dialogs;
