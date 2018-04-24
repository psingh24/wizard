var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;

import { Checkbox, Table, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

var Alerts = createReactClass({
  getInitialState: function() {
    return {
      SOS: ''
    }
  },
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  },
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
              value={this.state.SOSMessage}
              placeholder={this.props.profileData.firstName+ " has sent an SOS"}
              onChange={this.handleChange}
              />
            </FormGroup>
         

        {/* Abnormal Heart Rate */}
          
            <div className="ahrCheckbox"><Checkbox ></Checkbox></div>
            <div className="abnormalHeartRate">Abnormal Heart Rate</div>
            <FormGroup className="ahrMessage">
              <FormControl
              type="text"
              name="SOS"
              value={this.state.SOSMessage}
              placeholder={this.props.profileData.firstName+ " has sent an SOS"}
              onChange={this.handleChange}
              />
              <div className="ahrHeartRate">
                  <FormGroup className="hrMin">
                  <div className="formInputTitle">Heart Rate</div>
                    <FormControl
                    type="text"
                    name="SOS"
                    value={this.state.SOSMessage}
                    placeholder={this.props.profileData.firstName+ " has sent an SOS"}
                    onChange={this.handleChange}
                    />
                    <div className="formInputTitle">/min</div>
                  </FormGroup>
                  <FormGroup className="hrMax">
                  <div className="formInputTitle">&nbsp;</div>
                    <FormControl
                    type="text"
                    name="SOS"
                    value={this.state.SOSMessage}
                    placeholder={this.props.profileData.firstName+ " has sent an SOS"}
                    onChange={this.handleChange}
                    />
                    <div className="formInputTitle">/max</div>
                  </FormGroup>
              </div>
            </FormGroup>
          

        

        {/* VitalBand Low Battery */}
          
            <div className="vblbCheckbox"><Checkbox ></Checkbox></div>
            <div className="vitalBandLowBattery">VitalBand Low Battery</div>
            <FormGroup className="vblbMessage">
              <FormControl
              type="text"
              name="SOS"
              value={this.state.SOSMessage}
              placeholder={this.props.profileData.firstName+ " has sent an SOS"}
              onChange={this.handleChange}
              />
            </FormGroup>
          



{/* <Table condensed hover responsive>
  <thead>
    <tr>
      <th>Enable</th>
      <th>Feature</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Checkbox checked={"checked"} disabled></Checkbox></td>
      <td>SOS</td>
      <td>
        <FormGroup className="firstName">
            <FormControl
            type="text"
            name="SOS"
            value={this.state.SOSMessage}
            placeholder={this.props.profileData.firstName+ " has sent an SOS"}
            onChange={this.handleChange}
            />
        </FormGroup></td>
    </tr>
    <tr>
      <td><Checkbox ></Checkbox></td>
      <td>Abnormal Heart Rate</td>
      <td><FormGroup className="firstName">
            <FormControl
            type="text"
            name="SOS"
            value={this.state.SOSMessage}
            placeholder={this.props.profileData.firstName+ " has sent an SOS"}
            onChange={this.handleChange}
            />
        </FormGroup>
        </td>
      <td>

      <FormGroup className="firstName">
            <FormControl
            type="text"
            name="SOS"
            value={this.state.SOSMessage}
            placeholder={this.props.profileData.firstName+ " has sent an SOS"}
            onChange={this.handleChange}
            />
        </FormGroup>
      <FormGroup className="firstName">
            <FormControl
            type="text"
            name="SOS"
            value={this.state.SOSMessage}
            placeholder={this.props.profileData.firstName+ " has sent an SOS"}
            onChange={this.handleChange}
            />
        </FormGroup>
      </td>
    </tr>
    <tr>
      <td><Checkbox ></Checkbox></td>
      <td>VitalBand Low Battery</td>
      <td><FormGroup className="firstName">
            <FormControl
            type="text"
            name="SOS"
            value={this.state.SOSMessage}
            placeholder={this.props.profileData.firstName+ " has sent an SOS"}
            onChange={this.handleChange}
            />
        </FormGroup></td>
    </tr>
  </tbody>
</Table> */ }
     </div>);
  }
});

module.exports = Alerts;
