var React = require("react");
var createReactClass = require("create-react-class");

import { Checkbox } from 'react-bootstrap';

var Link = require("react-router").Link;



var Eula = createReactClass({
  componentDidMount() {
    console.log(this.props.formCompleted)
  },
  render: function() {
    return (
     <div>
      <p>Vital to your health, vital to your peace of mind, vital to YOU. 
          <span><br/>
          ( Please review and agree to our terms of use. )
          </span>
      </p>
      
      <p>
          <img src="assets/image/icon-folder.svg" alt=""/> Terms & Conditions</p>
        <hr/>
      <p>
          <img src="assets/image/icon-folder.svg" alt=""/> Privacy Policy</p>
        <hr/>
      <p>
          <img src="assets/image/icon-folder.svg" alt=""/> EULA</p>
          
      {this.props.formCompleted ? <div></div> : <p>Please read the documents and check the box to continue</p>}
      <Checkbox checked={this.props.formChecked} onChange={this.props.handleChange}> <p> I agree to the terms and Conditions laid out in the above documents</p></Checkbox>
      
      {/* <p> */}
          {/* <img src="assets/image/icon-checkmark-square.svg" alt=""/> Begin Set-up</p> */}
        </div>
        
    );
  }
});

module.exports = Eula;
