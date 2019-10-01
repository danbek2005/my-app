import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App.js';
import {addPost} from './state.js';
import {changePost} from './state.js';

export let renderDOM = (props) => {
	ReactDOM.render(<App appState={props} addPost={addPost} changePost={changePost}/>, document.getElementById('root'));
}