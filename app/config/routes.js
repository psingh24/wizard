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


var history = createBrowserHistory()

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Saved = require("../components/Saved");


// Export the Routes
module.exports = (

<Router  history={BrowserRouter}>

<div>
    <Route exact path="/" component={Main}/>
    <Route path="/saved" component={Saved}/>
   
</div>
</Router>
  
  


);


// <Route path="saved" component={Saved} />

// <BrowserRouter >
//     <Route path="/" component={Main}/>

//     <Route path="/" component={Main}/>
//     </BrowserRouter>
