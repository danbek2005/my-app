import React, {useEffect} from 'react';
import './App.css';
import HeaderComponent from './Components/Header/HeaderComponent.jsx';
import Menu from './Components/Menu/Menu.js';
import FeedBack from './Components/FeedBack/Feedback.js';
import Footer from './Components/Footer/Footer.js';
import Articles from './Components/Articles/Articles.jsx';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {isCookie} from './redux/auth-reducer.js';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer.js';
import Preloader from './Components/Common/Preloader/Preloader.jsx'
import {HashRouter, BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/redux-store.js';

let App = ({initializeApp, initial, isCookie}) => {
	useEffect(() => {
		initializeApp(isCookie);
	}, []);
	if(!initial){
		return <Preloader />
	}
	return (
		<div className="App">
			<HeaderComponent />
			<Menu />
			<Articles />
			<FeedBack />
			<Footer />
		</div>
	);	
}

let AppContainer = compose(
	withRouter,
	connect((state) => {
		return {
			initial: state.app.initial
		}
	}, (dispatch) => {
		return {
			initializeApp: (isCookie) => {
				dispatch(initializeApp(isCookie));
			},
			isCookie: () => {
				return dispatch(isCookie());
			}
		}
	}))(App)

const SocialNetworkApp = () => {
	return 	<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Provider store={store}>
					<AppContainer store={store} />
				</Provider>
			</BrowserRouter>
}

export default SocialNetworkApp;