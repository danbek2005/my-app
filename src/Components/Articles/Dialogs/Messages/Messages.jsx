import React from 'react';
import classes from './Messages.module.css';
import MessageForm from './MessageForm.jsx';

var Message = (props) => {
	return (
		<div className={classes.Message + ' ' + classes[props.messType]}>
		{props.text}
		</div>
		
	)
}
var Messages = (props) => {

	var messageElements = props.dialogsPage.messages.map((message) => {
		let messType = message.user; 
		return (
			<Message text={message.text} id={message.id} messType={messType}/>
		)
		
	});

	return (
		<div className={classes.Messages}> 
		{messageElements}
		<MessageForm SendMessage={props.SendMessage}/>
		</div>
	)
}

	export default Messages;
