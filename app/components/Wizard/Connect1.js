import React from 'react';
import { Button, Checkbox, Image } from 'react-bootstrap';

export default function Connect1(props) {
  return (
    <div className="connect02">
        <div className="disclaimer"><h1 className="content-center disclaimer">Please run through the check list and check each box before moving forward</h1></div>
        <div className="noEthernetBTN"><Button onClick={() => {props.continue(1, props.currentPage)}} className="btnLarge noEthernetBTN" bsStyle="primary">NO ETHERNET?</Button></div>
        <div className="noEthernet"><p className="content-center-small noEthernet">Click here if you don't have the abilty to connect to an Ethernet cable to your router.</p></div>
        
        <div className="checkBox01"><Checkbox></Checkbox></div>
        <div className="checkBox01Text">Connect your VitalBand to the charger</div>
        <div className="checkBox01Image"><Image src="assets/image/watch-with-charger.png" className="connectThumb checkBox01Image"/></div>

        <div className="checkBox02"><Checkbox></Checkbox></div>
        <div><p className="checkBox02Text">Plug the power bale into the back of your Vitalhub</p></div>
        <div className="checkBox02Image"><Image src="assets/image/Pi-with-charge.png" className="connectThumb checkBox02Image"/></div>


        <div className="checkBox03"><Checkbox></Checkbox></div>
        <div className="checkBox03Text">Plug your VitalBand into your router wiht the ethernet cord</div>
        <div className="checkBox03Image"><Image src="assets/image/Pi-with-cable.png" className="connectThumb checkBox03Image"/></div>
         
     </div>
        
    );
}
