import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkApp from './App.jsx';


	ReactDOM.render(<SocialNetworkApp />, document.getElementById('root'));
serviceWorker.unregister();
