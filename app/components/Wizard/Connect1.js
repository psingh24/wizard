var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;

import { Button, Checkbox, Image } from 'react-bootstrap';

var Connect1 = createReactClass({
  render: function() {
    return (
     <div>
         <h3>[Please run through the check list and check each box before moving forward]</h3>
        <Button>NO ETHERNET?</Button>
        <p>Click here if you don't have the abilty to connect to an Ethernet cable to your router.</p>


        <Checkbox>Connect your VitalBand to the charger
            <Image src="assets/image/watch-with-charger.png" thumbnail /></Checkbox>
        <Checkbox>Plug the power bale into the back of your Vitalhub
            <Image src="assets/image/Pi-with-charge.png" thumbnail />
        </Checkbox>
        <Checkbox>Plug your VitalBand into your router wiht the ethernet cord
            <Image src="assets/image/Pi-with-cable.png" thumbnail />
        </Checkbox>

         
     </div>
        
    );
  }
});

module.exports = Connect1;