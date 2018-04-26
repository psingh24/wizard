// Inclue the React library
import React from 'react';

// Include the react-router module
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// var router = require("react-router");

import {
Router,
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

// Include the IndexRoute (catch-all route)
var IndexRoute = Router.IndexRoute;

// Reference the high-level components

import Main from '../components/Main.js'



// Export the Routes
module.exports = (

<Router  history={history}>

<div>
    <Route exact path="/" component={Main}/>
</div>
</Router>
  
  


);

