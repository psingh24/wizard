var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;

import { Button } from 'react-bootstrap';

var Success = createReactClass({
  render: function() {
    return (
     <div className="noEthernetBTN"><Button className="btnLarge" bsStyle="primary">GO TO DASHBAORD</Button></div>
        
    );
  }
});

module.exports = Success;