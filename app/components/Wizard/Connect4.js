import React from 'react';
import { Image, Button } from 'react-bootstrap';

export default function Connect4(props) {
  return (
    <div>
        <Image src="assets/image/smartphones.svg" className="imageSmartPhone"/>
        <h1>From your moble device go to the application store and download the VitalBand application. Enter your username and password to finish registering.</h1>
        <h1>Once you have successfully logges in to the mobile application select continue. If you don't want to use the mobile feature you can select skip this step.</h1>
        <div className="noEthernetBTN"><Button onClick={() => {props.continue(1, props.currentPage)}} className="btnLarge" bsStyle="primary">SKIP THIS STEP</Button></div>
    </div>
   );
}
