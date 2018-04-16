// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

import {
Router,
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Test = require("../components/Test");


// Export the Routes
module.exports = (

<Router  history={history}>

<div>
    <Route exact path="/" component={Main}/>
    <Route path="/test" component={Test}/>
   
</div>
</Router>
  
  


);


// <Route path="saved" component={Saved} />

// <BrowserRouter >
//     <Route path="/" component={Main}/>

//     <Route path="/" component={Main}/>
//     </BrowserRouter>
