import React from 'react';
import classes from './FormsControls.module.css';
import {reduxForm, Field } from 'redux-form';
export const TextArea = ({input, meta, ...props}) => {
	return (
			<div className={classes.FormControl}>
				<div className={classes.FormControl_Field}>
					<textarea {...input} {...props} className={meta.touched && meta.error ? classes.error_Field : null}/>
				</div>
				<div className={classes.FormControl_Span}>
					<span>{meta.touched && meta.error ? meta.error : null}</span>
				</div>
			</div>
	) 
}

export const Input = ({input, meta, ...props}) => {
	return (
		<div className={classes.FormControl}>
			<div className={classes.FormControl_Field}>
				<input {...input} {...props} className={meta.touched && meta.error ? classes.error_Field : null}/>
			</div>
			{(meta.touched && meta.error) &&
				<div className={classes.FormControl_Span}>
					<span>{meta.touched ? meta.error : null}</span>
				</div>
			}
		</div>
	) 
}

export const FieldCreator = (fieldName, el, type, validators) => {
	let className = 'LoginForm_' + fieldName;
	let smallFieldName = fieldName.toLowerCase();
	return (
		<div className={classes[className]}>
			<label htmlFor={smallFieldName}>{fieldName}: </label>
			<Field name={smallFieldName} component={el} type={type} placeholder={"Enter your " + smallFieldName} validate={validators}/>
		</div>
	)
}