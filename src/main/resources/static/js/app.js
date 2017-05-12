import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './layout';

import Home from './pages/home/home';
import Customer from './pages/customer/customer';
import Supplier from './pages/supplier/supplier';
import Employee from './pages/employee/employee';
import Transaction from './pages/transaction/transaction';
import Report from './pages/report/report';
import Tax from './pages/tax/tax';

import Login from './pages/login';

const app = document.getElementById('app');


ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="clients" component={Customer}/>
            <Route path="suppliers" component={Supplier}/>
            <Route path="employees" component={Employee}/>
            <Route path="transactions" component={Transaction}/>
            <Route path="reports" component={Report}/>
            <Route path="taxes" component={Tax}/>
        </Route>
        <Route path="/login" component={Login}/>
    </Router>, app
);