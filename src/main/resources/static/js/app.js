import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './layout';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Customer from './pages/customer/customer';
import Login from './pages/login';

const app = document.getElementById('app');


ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="customers" component={Customer}/>
        </Route>
        <Route path="/login" component={Login}/>
    </Router>,
    app
);