import React from 'react';
import { Checkbox } from 'react-bootstrap';

export default function Eula(props) {
  return (
    <div>
     <h1 className="content-center">Vital to your health, vital to your peace of mind, vital to YOU.</h1>
     <p className="content-center-small">( Please review and agree to our terms of use. )</p>
     
     <ul>
        <li><a className="" href="#"><img src="assets/image/icon-folder.svg" alt=""/> Terms & Conditions</a></li>
        <li><a className="" href="#"><img src="assets/image/icon-folder.svg" alt=""/> Privacy Policy</a></li>
        <li><a className="" href="#"><img src="assets/image/icon-folder.svg" alt=""/> EULA</a></li>
      </ul>
      
     {props.EulaCompleted ? <div></div> : <p className="content-center-small">* Please read the documents and check the box to continue *</p>}
     <div className="content-center-small"><Checkbox checked={props.EulaCompleted ? "checked": false} onChange={props.handleChange}>  I agree to the terms and Conditions laid out in the above documents</Checkbox></div>

       </div>

   );
}
