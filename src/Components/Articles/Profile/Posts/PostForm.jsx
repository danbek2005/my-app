import React from 'react';
import classes from './Posts.module.css';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator, minLengthCreator} from './../../../../Until/Validators/Profile-validator.js';
import {TextArea} from './../../../Common/FormsControls/FormsControls.js';

let new_maxLengthCreator = maxLengthCreator(100);
let new_minLengthCreator = minLengthCreator(5);

let PostFrom = (props) => {
	return <form onSubmit={props.handleSubmit} className={classes.Posts_Form}>
				<Field name="post" component={TextArea} type="text" placeholder="Enter your new post..." rows="5" cols="50" validate={[required, new_maxLengthCreator, new_minLengthCreator]}/>
				<button>Send</button>
			</form>
}

const PostReduxForm = reduxForm({
	form: 'post'
})(PostFrom);

let NewPost = (props) => {
	return <PostReduxForm onSubmit={props.addPost}/>
}

export default NewPost;