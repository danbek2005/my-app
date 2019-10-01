import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import Header from './Header.jsx';
import Login from './Login.jsx';
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
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		isCookie: () => {
			dispatch(isCookie());
		},
		getAuthElements: (props, classes) => {
			if(props.isAuth){
				return  (<div className={classes.userInfo}>
							<span className={classes.UserName}>{props.name} | </span>
							<button className={classes.Logout} onClick={props.logout}>Exit</button>
						</div>)
			}else{
				return <Login formCheck={props.formCheck}/>
			}
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
		<Header checkField={props.checkField} logout={props.logout} getAuthElements={props.getAuthElements} formCheck={props.formCheck} isAuth={props.isAuth} name={props.name} />
	)
});