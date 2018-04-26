import React from 'react';
import { Checkbox, Table, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


export default function Alerts(props) {
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
          value={props.alertsData.SOS}
          placeholder={props.profileData.firstName + " has sent an SOS"}
          onChange={props.handleAlertsChange}
        />
      </FormGroup>


      {/* Abnormal Heart Rate */}

      <div className="ahrCheckbox"><Checkbox name="abnormalHeartRateChecked" checked={props.alertsData.abnormalHeartRateChecked ? "checked" : false} onChange={props.handleAlertsChange}></Checkbox></div>
      <div className="abnormalHeartRate">Abnormal Heart Rate</div>
      <FormGroup className="ahrMessage">
        <FormControl
          type="text"
          name="abnormalHeartRate"
          value={props.alertsData.abnormalHeartRate}
          placeholder={props.profileData.firstName + " has an abnormal heart rate."}
          onChange={props.handleAlertsChange}
        />
        <div className="ahrHeartRate">
          <FormGroup className="hrMin">
            <div className="formInputTitle">Heart Rate</div>
            <FormControl
              type="text"
              name="min"
              value={props.alertsData.min}
              placeholder={50}
              onChange={props.handleAlertsChange}
            />
            <div className="formInputTitle">/min</div>
          </FormGroup>
          <FormGroup className="hrMax">
            <div className="formInputTitle">&nbsp;</div>
            <FormControl
              type="text"
              name="max"
              placeholder={140}
              value={props.alertsData.max}
              onChange={props.handleAlertsChange}
            />
            <div className="formInputTitle">/max</div>
          </FormGroup>
        </div>
      </FormGroup>


      {/* VitalBand Low Battery */}

      <div className="vblbCheckbox"><Checkbox name="batteryChecked" checked={props.alertsData.batteryChecked ? "checked" : false} onChange={props.handleAlertsChange}></Checkbox></div>
      <div className="vitalBandLowBattery">VitalBand Low Battery</div>
      <FormGroup className="vblbMessage">
        <FormControl
          type="text"
          name="battery"
          placeholder="VitalBand battery is low"
          value={props.alertsData.battery}
          onChange={props.handleAlertsChange}
        />
      </FormGroup>

    </div>);
}
