var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;

import { Checkbox, Table, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

var Alerts = createReactClass({
  render: function() {
    return (
        <div className="structureFormAlerts">
          
            <div className="enable formInputTitle">Enable</div>
            <div className="feature formInputTitle">Feature</div>
            <div className="message formInputTitle">Message</div>
          

        {/* SOS */}
          
            <div className="sosCheckbox"><Checkbox checked={"checked"} disabled></Checkbox></div>
            <div className="sos">SOS</div>
            <FormGroup className="sosMessage">
              <FormControl
              type="text"
              name="SOS"
              value={this.props.alertsData.SOS}
              placeholder={this.props.profileData.firstName + " has sent an SOS"}
              onChange={this.props.handleAlertsChange}
              />
            </FormGroup>
         

        {/* Abnormal Heart Rate */}
          
            <div className="ahrCheckbox"><Checkbox name="abnormalHeartRateChecked" onChange={this.props.alertsData.abnormalHeartRateChecked}></Checkbox></div>
            <div className="abnormalHeartRate">Abnormal Heart Rate</div>
            <FormGroup className="ahrMessage">
              <FormControl
              type="text"
              name="abnormalHeartRate"
              value={this.props.alertsData.abnormalHeartRate}
              placeholder={this.props.profileData.firstName + " has an abnormal heart rate."}
              onChange={this.props.handleAlertsChange}
              />
              <div className="ahrHeartRate">
                  <FormGroup className="hrMin">
                  <div className="formInputTitle">Heart Rate</div>
                    <FormControl
                    type="text"
                    name="min"
                    value={this.props.alertsData.min}
                    placeholder={50}
                    onChange={this.props.handleAlertsChange}
                    />
                    <div className="formInputTitle">/min</div>
                  </FormGroup>
                  <FormGroup className="hrMax">
                  <div className="formInputTitle">&nbsp;</div>
                    <FormControl
                    type="text"
                    name="max"
                    placeholder={140}
                    value={this.props.alertsData.max}
                    onChange={this.props.handleAlertsChange}
                    />
                    <div className="formInputTitle">/max</div>
                  </FormGroup>
              </div>
            </FormGroup>
          

        

        {/* VitalBand Low Battery */}
          
            <div className="vblbCheckbox"><Checkbox name="battery" onChange={this.props.alertsData.batteryChecked}></Checkbox></div>
            <div className="vitalBandLowBattery">VitalBand Low Battery</div>
            <FormGroup className="vblbMessage">
              <FormControl
              type="text"
              name="battery"
              value={this.props.alertsData.battery}
              onChange={this.props.handleAlertsChange}
              />
            </FormGroup>
          
     </div>);
  }
});

module.exports = Alerts;
