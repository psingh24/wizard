import React from 'react';
import { Image, FormGroup, FormControl } from 'react-bootstrap';

export default function Connect3(props) {
  return (
    <div>
        <h1>To connect, enter the 5 digits on the back of your watch:</h1>
        <FormGroup className="watchCode">
           <FormControl
           type="text"
           name="watchCode"
           className="watchCode"
           placeholder="Five-digit Code"
           value={props.watchMac}
           onChange={props.handlewatchMacChange}
           />
       </FormGroup>
       <Image src="assets/image/vitalband-back.png" className="imageWatchCode"/>
        
    </div>
       
   );
}
