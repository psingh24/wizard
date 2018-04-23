var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;
import { Image } from 'react-bootstrap';


var Connect = createReactClass({
  render: function() {
    return (
     <div>
        <Image src="assets/image/watch-and-charger.png" thumbnail />
        <Image src="assets/image/dot.png" thumbnail />
        <Image src="assets/image/pi-hub.png" thumbnail />
        <Image src="assets/image/Pi-Charger.png" thumbnail />
        <Image src="assets/image/ethernet-cable.png" thumbnail />
     </div>
        
    );
  }
});

module.exports = Connect;
