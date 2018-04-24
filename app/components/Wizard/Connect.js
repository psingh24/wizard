var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;
import { Image } from 'react-bootstrap';


var Connect = createReactClass({
  render: function() {
    return (
     <div className="connect01">
        <div><Image src="assets/image/watch-and-charger.png" className="image01"/></div>
        <div><Image src="assets/image/dot.png" className="image02"/></div>
        <div><Image src="assets/image/pi-hub.png" className="image03"/></div>
        <div><Image src="assets/image/Pi-Charger.png" className="image04"/></div>
        <div><Image src="assets/image/ethernet-cable.png" className="image05"/></div>
     </div>
        
    );
  }
});

module.exports = Connect;
