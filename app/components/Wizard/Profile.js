var React = require("react");
var createReactClass = require("create-react-class");
// import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';

var Link = require("react-router").Link;
var Telephone = require("react-phone-input")
import DatePicker from 'react-datepicker';
import TimezonePicker from 'react-bootstrap-timezone-picker';
// import '../../../node_modules/react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

import { Form, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';



var Profile = createReactClass({
    getInitialState: function() {
        return {
            firstName: '',
            middleName: '',
            lastName: '',
            phone: '',
            dob: '',
            heightFt: '',
            heightIn: '',
            weight: '',
            phoneNumber: '',
            gender: '',
            activityLevel: '',
            timezone: ''
        }
    },
    handleChange(e) {
        var dateControl = document.querySelector('input[type="date"]');
        this.setState({dob: dateControl.value})
        this.setState({ [e.target.name]: e.target.value });
      },
    validateFirstName(id) {
        switch (id) {
            case "firstName": {
                var length = this.state.firstName.length;
                if (length >= 3) return 'success';
                else if (length > 0) return 'warning';
                else if (length === 0) return 'error';
                return null;
            }
            case "lastName": {
                var length = this.state.lastName.length;
                if (length >= 3) return 'success';
                else if (length > 0) return 'warning';
                else if (length === 0) return 'error';
                return null;
            }
            case "weight": {
                var length = this.state.weight.length;
                if (length >= 1 && !isNaN(this.state.weight)) return 'success';
                if (length >= 1 && isNaN(this.state.weight)) return 'warning';
                else if (length === 0) return 'error';
                return null;
            }
            case "telephone": {
                var length = this.state.phoneNumber.length;
                if (length >= 10 && !isNaN(this.state.phoneNumber)) return 'success';
                if (length >= 1 && !isNaN(this.state.phoneNumber)) return 'warning';
                else if (length >= 1 && isNaN(this.state.phoneNumber)) return 'warning';
                else if (length === 0) return 'error';
                return null;
            }
            case "dob": {
                var value = this.state.dob;
                if (value) return 'success';
                else return 'error';
                return null;
            }
            case "height": {
                var heightFt = this.state.heightFt;
                var heightIn = this.state.heightIn;
                if (heightFt && heightIn) return 'success';
                else return 'error';
                return null;
            }
            case "gender": {
                var gender = this.state.gender;
                if (gender) return 'success';
                else return 'error';
                return null;
            }
            case "activityLevel": {
                var activityLevel = this.state.activityLevel;
                if (activityLevel) return 'success';
                else return 'error';
                return null;
            }

        }
      },   
  render: function() {
    return (
     <div>Profile
         <div className="form">
         <Form>
             {/* timezone */}
         <FormGroup>
            <ControlLabel>Timezone</ControlLabel>
            <TimezonePicker
            absolute      = {false}
            defaultValue  = "Europe/Moscow"
            placeholder   = "Select timezone..."
            onChange      = {this.handleChange}
          />
        </FormGroup>
             {/* firstName */}
        <FormGroup
          validationState={this.validateFirstName("firstName")}
        >
        <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="Enter First Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
            {/* Middle Name */}
        <FormGroup
        >
          <ControlLabel>Middle Name</ControlLabel>
          <FormControl
            type="text"
            name="middleName"
            value={this.state.middleName}
            placeholder="Enter Middle Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
            {/* Last Name */}
        <FormGroup
          validationState={this.validateFirstName("lastName")}
        >
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Enter Last Names"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

            {/* Date of Birth */}
        <FormGroup
          validationState={this.validateFirstName("dob")}
        >
            <ControlLabel>Date of Birth</ControlLabel>
            <FormControl id="date" type="date" name="dob" onChange={this.handleChange}/>
            <FormControl.Feedback />
        </FormGroup>
            {/* Height */}
        <FormGroup validationState={this.validateFirstName("height")}>
            <ControlLabel>Height</ControlLabel>
            <FormControl componentClass="select" placeholder="feet" name="heightFt" value={this.state.heightFt} 
        onChange={this.handleChange} >
                <option value="select" disabled>Feet</option>
                <option value="1">1'</option>
                <option value="2">2'</option>
                <option value="3">3'</option>
                <option value="4">4'</option>
                <option value="5">5'</option>
                <option value="6">6'</option>
                <option value="7">7'</option>
                <option value="8">8'</option>
                <option value="9">9'</option>
                <option value="10">10'</option>
            </FormControl>
            <FormControl.Feedback />
            <FormControl componentClass="select" placeholder="inches" name="heightIn" value={this.state.heightIn} 
        onChange={this.handleChange} >
                <option value="select" disabled>Inches</option>
                <option value="0">0"</option>
                <option value="1">1"</option>
                <option value="2">2"</option>
                <option value="3">3"</option>
                <option value="4">4"</option>
                <option value="5">5"</option>
                <option value="6">6"</option>
                <option value="7">7"</option>
                <option value="8">8"</option>
                <option value="9">9"</option>
                <option value="10">10"</option>
                <option value="11">11"</option>
            </FormControl>
        </FormGroup>
            {/* Weight */}
        <FormGroup
          validationState={this.validateFirstName("weight")}
          
        >
          <ControlLabel>Weight(lbs)</ControlLabel>
          <FormControl
            type="text"
            name="weight"
            value={this.state.weight}
            placeholder="Enter Weight"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        {/* phone number */}
        <FormGroup
          validationState={this.validateFirstName("telephone")}
          
        >
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            placeholder="Enter Phone Number"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        {/* Gender */}
        <FormGroup validationState={this.validateFirstName("gender")}>
            <ControlLabel>Gender</ControlLabel>
            <FormControl componentClass="select" placeholder="Gender" name="gender" value={this.state.gender} 
        onChange={this.handleChange} >
                <option value="select" disabled>Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </FormControl>
            <FormControl.Feedback />
        </FormGroup>
        <FormGroup validationState={this.validateFirstName("activityLevel")}>
            <ControlLabel>Height</ControlLabel>
            <FormControl componentClass="select" placeholder="Activity Level" name="activityLevel" value={this.state.activityLevel} 
        onChange={this.handleChange} >
                <option value="select" disabled>Activity Level</option>
                <option value="Very Active">Very Active</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </FormControl>
            <FormControl.Feedback />
        </FormGroup>
      </Form>
        </div>
       
   </div>
        
    );
  }
});

module.exports = Profile;


