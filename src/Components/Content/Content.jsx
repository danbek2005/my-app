import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {withSuspense} from './../../HOC/withSuspense'

import ProfileContainer from './Profile/ProfileContainer';

const DialogsContainer = React.lazy(() => import("./Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const LoginErrorContainer = React.lazy(() => import('./../Common/Warning/LoginError'));

var Content = (props) => {
	return (
		<div className="content">
			<header></header>
			<Route path="/profile" render={() => <ProfileContainer />}/>
			<Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
			<Route path="/users" render={withSuspense(UsersContainer)}/>
			<Route path="/loginError" render={withSuspense(LoginErrorContainer)}/>
			<footer></footer>
		</div>
		);
	}

	export default Content;
