var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;

import { Image, Button } from 'react-bootstrap';

var Connect4 = createReactClass({
  render: function() {
    return (
     <div>
         <Image src="assets/image/smartphones.svg" className="imageSmartPhone"/>
         <h1>From your moble device go to the application store and download the VitalBand application. Enter your username and password to finish registering.</h1>
         <h1>Once you have successfully logges in to the mobile application select continue. If you don't want to use the mobile feature you can select skip this step.</h1>
         <div className="noEthernetBTN"><Button onClick={() => {this.props.continue(1, this.props.currentPage)}} className="btnLarge" bsStyle="primary">SKIP THIS STEP</Button></div>
     </div>
        
    );
  }
});

module.exports = Connect4;