var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;

import { Image, FormGroup, FormControl } from 'react-bootstrap';

var Connect3 = createReactClass({
  render: function() {
    return (
     <div>
         <h1>To connect, enter the 5 digits on the back of your watch:</h1>
         <FormGroup className="watchCode">
            <FormControl
            type="text"
            name="watchCode"
            className="watchCode"
            placeholder="Five-digit Code"
            />
        </FormGroup>
        <Image src="assets/image/vitalband-back.png" className="imageWatchCode"/>
         
     </div>
        
    );
  }
});

module.exports = Connect3;