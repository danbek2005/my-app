import React from 'react';
import classes from './FormsControls.module.css';
import {reduxForm, Field } from 'redux-form';
export const TextArea = ({input, meta, ...props}) => {
	return (
			<div className="d-flex flex-column aling-items-center">
				<textarea {...input} {...props} className="form-textarea"/>
				<span className="form-error">{meta.touched && meta.error ? meta.error : null}</span>
			</div>
	) 
}

export const Input = ({input, meta, ...props}) => {
	return (
			<div className="form-input-wrapper d-flex">
				<input {...input} {...props} className="form-input"/>
				{(meta.touched && meta.error) &&
					<div className="form-error">
						<span className="form-error-text">
							{meta.touched ? meta.error : null}
						</span>
						<img className="form-error-img" src="http://localhost:3000/files/warning.jpg" alt="warning"/>
					</div>
				}
			</div>
	) 
}

export const FieldCreator = (fieldName, el, type, validators) => {
	let smallFieldName = fieldName.toLowerCase();
	return (
		<div className="form-item">
			<label htmlFor={smallFieldName}>{fieldName}: </label>
			<Field name={smallFieldName} component={el} type={type} placeholder={"Enter your " + smallFieldName} validate={validators}/>
		</div>
	)
}