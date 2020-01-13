import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator, checkEmail, checkSpace} from './../../Until/Validators/LoginForm-validator.js';
import {Input, FieldCreator} from './../Common/FormsControls/FormsControls.js';

let checkNameLength = maxLengthCreator(10);
let checkPasswordLength = maxLengthCreator(20);

var LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit} className="login-form d-flex">
		{FieldCreator('Name', Input, 'text', [required, checkSpace, checkNameLength])}
		{FieldCreator('Mail', Input, 'text', [required, checkSpace, checkEmail])}
		{FieldCreator('Password', Input, 'password', [required, checkSpace, checkPasswordLength])}

		<button className="form-btn">
		Enter
		{props.error &&
			<div className="main-error">
				<span className="form-error-text">{props.error}</span>
				<img className="form-error-img" src="http://localhost:3000/files/warning.jpg" alt="warning"/>
			</div>
		}
		</button>

	</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

let Login = (props) => {
	return <LoginReduxForm onSubmit={props.formCheck}/>
}

export default Login;