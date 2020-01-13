import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import Navbar from './Navbar.jsx';
import API from '../../API/api.js';
import {formCheck} from '../../redux/auth-reducer.js';
import {isCookie} from '../../redux/auth-reducer.js';
import {logout} from '../../redux/auth-reducer.js';
import {checkField} from '../../redux/auth-reducer.js';

let mapStateToProps = (state) => {
	return {
		id: state.auth.id,
		name: state.auth.name,
		mail: state.auth.mail,
		isAuth: state.auth.isAuth,
		img: state.auth.img
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		isCookie: () => {
			dispatch(isCookie());
		},
		formCheck: (data) => {
			dispatch(formCheck(data));
		},
		logout: () => {
			dispatch(logout());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)((props) => {
	return (
		<Navbar img={props.img} id={props.id} logout={props.logout} formCheck={props.formCheck} isAuth={props.isAuth} name={props.name} />
	)
});