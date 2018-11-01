import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import "normalize.css";
import "./scss/styles.scss";
import MainContainer from './components/MainContainer';

ReactDOM.render(
  <Router>
    <MainContainer />
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();