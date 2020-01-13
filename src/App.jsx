import React, { useEffect } from 'react';

import NavbarContainer from './Components/Navbar/NavbarContainer.jsx';

import Content from './Components/Content/Content.jsx';

import Preloader from './Components/Common/Preloader/Preloader.jsx'

import Login from './Components/Navbar/Login.jsx';

import {formCheck} from './redux/auth-reducer.js';

import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { isCookie } from './redux/auth-reducer.js';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer.js';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/redux-store.js';

let App = ({ initializeApp, initial, isCookie, formCheck, isAuth}) => {
    useEffect(() => {
        initializeApp(isCookie);
    }, [isAuth]);
    if (!initial) {
        return <Preloader />
    }else if(!isCookie()){
        return (
            <Login formCheck={formCheck}/>
        )
    }
    return (
        <div className="App">
            <NavbarContainer />
            <Content />
        </div>
    );
}

let AppContainer = compose(
    withRouter,
    connect((state) => {
        return {
            initial: state.app.initial,
            isAuth: state.auth.isAuth
        }
    }, (dispatch) => {
        return {
            initializeApp: (isCookie) => {
                dispatch(initializeApp(isCookie));
            },
            isCookie: () => {
                return dispatch(isCookie());
            },
            formCheck: (data) => {
                dispatch(formCheck(data));
            }
        }
    }))(App)

const SocialNetworkApp = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
		      <Provider store={store}>
		          <AppContainer store={store} />
		      </Provider>
		</BrowserRouter>
}

export default SocialNetworkApp;
