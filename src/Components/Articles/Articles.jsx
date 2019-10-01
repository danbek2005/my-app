import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {withSuspense} from './../../HOC/withSuspense'
import classes from './Articles.module.css';

import ProfileContainer from './Profile/ProfileContainer';

const DialogsContainer = React.lazy(() => import("./Dialogs/DialogsContainer"));
const News = React.lazy(() => import("./News/News"));
const Music = React.lazy(() => import("./Music/Music"));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const Settings = React.lazy(() => import("./Settings/Settings"));
const LoginErrorContainer = React.lazy(() => import('./../Common/Warning/LoginError'));

var Articles = (props) => {
	return (
		<div className={classes.Articles}>
			<Route path="/profile" render={() => <ProfileContainer />}/>
			<Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
			<Route path="/users" render={withSuspense(UsersContainer)}/>
			<Route path="/news" render={withSuspense(News)}/>
			<Route path="/music" render={withSuspense(Music)}/>
			<Route path="/settings" render={withSuspense(Settings)}/>
			<Route path="/loginError" render={withSuspense(LoginErrorContainer)}/>
		</div>
		);
	}

	export default Articles;
