var React = require("react");
var createReactClass = require('create-react-class');

import {
  Link
} from 'react-router-dom'

var Nav = createReactClass({
  render: function() {
    return (

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
    );
  }
});

module.exports = Nav;


