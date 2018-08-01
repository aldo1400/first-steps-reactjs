import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/';
import StaticSite from './components/Router'
import AuthSite from './components/Auth'
// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<StaticSite />, document.getElementById('root'));
ReactDOM.render(<AuthSite />, document.getElementById('root'));