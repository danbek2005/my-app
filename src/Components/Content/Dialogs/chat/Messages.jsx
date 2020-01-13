import React from 'react';
import MessageForm from './MessageForm.jsx';

var Message = (props) => {
	return (
		<div className={"message message-" + props.position}>
			<span>{props.text}</span>
		</div>
		
	)
}
var Messages = (props) => {

	var messageElements = props.dialogsPage.messages.map((message) => {
		let position;
		if(message.id == props.id){
			position = 'right'
		}else{
			position = 'left'
		}
		return (
			<Message text={message.text} id={message.id} position={position}/>
		)
		
	});

	return (
		<div className="messages"> 
			<div className="chat-zone">{messageElements}</div>
			<MessageForm SendMessage={props.SendMessage} id={props.id} name={props.name}/>
		</div>
	)
}

	export default Messages;
