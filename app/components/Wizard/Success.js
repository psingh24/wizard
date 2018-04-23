var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;

import { Button } from 'react-bootstrap';

var Success = createReactClass({
  render: function() {
    return (
     <div>
         <Button>GO TO DASHBAORD</Button>
     </div>
        
    );
  }
});

module.exports = Success;