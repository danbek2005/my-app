import React from 'react';
import {connect} from 'react-redux';
import classes from './loginError.module.css';
import {Redirect} from 'react-router-dom';

class loginError extends React.Component{
	render(){
		if(this.props.isAuth){
			return (<Redirect to='/profile' />)
		}else{
			return (
				<div className={classes.ErrorPage}>
					<h1>Sorry, but you are not loggen in</h1>
				</div>
			)
		}
		
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

let LoginErrorContainer = connect(mapStateToProps)(loginError);

export default LoginErrorContainer;
