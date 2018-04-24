var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;
import { Image } from 'react-bootstrap';


var Connect5 = createReactClass({
  render: function() {
    return (
     <div>

         <Image src="assets/image/hour-glass.svg" className="imageSmartPhone"/>
         
     </div>
        
    );
  }
});

module.exports = Connect5;