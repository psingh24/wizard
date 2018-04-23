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
     <div>Alerts
    <Table condensed hover responsive>
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
</Table>
    
     </div>);
  }
});

module.exports = Alerts;
