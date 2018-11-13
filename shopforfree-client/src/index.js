import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store} from './_helpers';

import "../src/css/base.css";
import "../src/css/font-awesome.css";
import "../src/css/prettify.css";
import "../src/css/style-responsive.min.css";
import "../src/css/style.min.css";
import "../src/css/bootstrap.min.css";

import "../src/js/jquery.js";
import "../src/js/jquery.lightbox-0.5.js";
import "../src/js/less.js";
import "../src/js/main.js";
import "../src/js/main.min.js";
import "../src/js/prettify.js";
require('../public/favicon.ico');



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
