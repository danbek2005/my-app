import React from 'react';
import { Field, reduxForm } from 'redux-form';


let Input = ({input, meta, ...props}) => {
	return (
		<input {...input} {...props} className="message-input"/>
	)
}

var MessageForm = (props) => {
	return	<form onSubmit={props.handleSubmit} className="message-form">
				<Field name={"text"} component={Input} type={"text"}/>
				<button className="message-btn">Enter</button>
			</form>
}

const MessageReduxForm = reduxForm({
	form: 'message'
})(MessageForm);

let NewMessage = (props) => {
	let SendMessage = (data) => {
		data.id = props.id;
		data.login = props.name;
		debugger;
		props.SendMessage(data)
	}
	return <MessageReduxForm onSubmit={SendMessage}/>
}

export default NewMessage;