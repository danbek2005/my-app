import React from 'react';
import classes from './Header.module.css';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator, checkEmail, checkSpace} from './../../Until/Validators/LoginForm-validator.js';
import {Input, FieldCreator} from './../Common/FormsControls/FormsControls.js';

let checkNameLength = maxLengthCreator(10);
let checkPasswordLength = maxLengthCreator(20);

var LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit} className={classes.LoginForm}>
		{FieldCreator('Name', Input, 'text', [required, checkSpace, checkNameLength])}
		{FieldCreator('Mail', Input, 'text', [required, checkSpace, checkEmail])}
		{FieldCreator('Password', Input, 'password', [required, checkSpace, checkPasswordLength])}

		{props.error &&
			<div className={classes.CommonError}>
				{props.error}
			</div>}
		<div className={classes.LoginForm_Button}>
			<button>Enter</button>
		</div>
	</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

let Login = (props) => {
	return <LoginReduxForm onSubmit={props.formCheck}/>
}

export default Login;