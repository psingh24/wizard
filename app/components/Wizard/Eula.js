var React = require("react");
var createReactClass = require("create-react-class");

import { Checkbox } from 'react-bootstrap';

var Link = require("react-router").Link;



var Eula = createReactClass({
  componentDidMount() {
    // console.log(this.props.formCompleted)
  },
  render: function() {
    return (
     <div>
      <h1 className="content-center">Vital to your health, vital to your peace of mind, vital to YOU.</h1>
      <p className="content-center-small">( Please review and agree to our terms of use. )</p>
      <hr className="hr-short"/>
      <p className="content-center">
          <img src="assets/image/icon-folder.svg" alt=""/> Terms & Conditions</p>
        <hr className="hr-short"/>
      <p className="content-center">
          <img src="assets/image/icon-folder.svg" alt=""/> Privacy Policy</p>
        <hr className="hr-short"/>
      <p className="content-center">
          <img src="assets/image/icon-folder.svg" alt=""/> EULA</p>
      <hr className="hr-short"/>

      {this.props.EulaCompleted ? <div></div> : <p className="content-center-small">Please read the documents and check the box to continue</p>}
      <p className="content-center-small"><Checkbox checked={this.props.EulaCompleted ? "checked": false} onChange={this.props.handleChange}>  I agree to the terms and Conditions laid out in the above documents</Checkbox></p>

      {/* <p> */}
          {/* <img src="assets/image/icon-checkmark-square.svg" alt=""/> Begin Set-up</p> */}
        </div>

    );
  }
});

module.exports = Eula;
