import React from 'react';
import classes from './Messages.module.css';
import { Field, reduxForm } from 'redux-form';

var MessageForm = (props) => {
	return	<form onSubmit={props.handleSubmit} className={classes.Messages_Form}>
				<Field ref={props.MessageFieldElement} name="message" component="textarea" type="text" placeholder="Enter your message..."/>
				<button>Enter</button>
			</form>
}

const MessageReduxForm = reduxForm({
	form: 'message'
})(MessageForm);

let NewMessage = (props) => {
	let SendMessage = (data) => {
		props.SendMessage(data)
	}
	return <MessageReduxForm onSubmit={SendMessage}/>
}

export default NewMessage;