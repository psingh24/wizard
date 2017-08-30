var React = require("react");
var createReactClass = require('create-react-class');

var App = require("../app");

var Nav = require("./Nav");
var Search = require("./Search");
var Result = require("./Result");

var Link = require('react-router').Link

var Main = createReactClass({
  render: function() {
    return (
      <div>
       <Nav />
        <div className="container">
         

          <div className="row">
            <div className="col-md-4">
              <Search />
            </div>
            <div className="col-md-8">
              <Result />
            </div>
          </div>
        
        
        
        </div>
        </div>
    );
  }
});

module.exports = Main;


