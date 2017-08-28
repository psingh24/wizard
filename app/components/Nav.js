var React = require("react");
var createReactClass = require('create-react-class');

var App = require("../app")

// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Switch = require('react-router').Switch
// var Link = require('react-router').Link

var Nav = createReactClass({
  render: function() {
    return (
      // <Router>
      <nav className="navbar navbar">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            <i className="fa fa-reddit fa-2x" aria-hidden="true" />
            <span>ReactScrapper</span>
          </a>

          <div className="icon-bar">
            <a href="/"><i className="fa fa-home fa-3x" /></a>
            <a href="https://github.com/psingh24" target="_blank">
              <i className="fa fa-github fa-3x" />
            </a>
          </div>
        </div>
      </nav>


      // <Route exact path="/" component={App}/>
        // </Router>
    );
  }
});

module.exports = Nav;


