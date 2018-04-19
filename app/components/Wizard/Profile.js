var React = require("react");
var createReactClass = require("create-react-class");
// import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';

var Link = require("react-router").Link;

// import TimezonePicker from 'react-bootstrap-timezone-picker';
// import '../../../node_modules/react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

import { Form, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';



var Profile = createReactClass({
    getInitialState: function() {
        return {
            timezone: '',
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
            address: '',
            city: '',
            state: '',
            zip: '',
        }
    },
    handleChange(e) {
        var dateControl = document.querySelector('input[type="date"]');
        this.setState({dob: dateControl.value})
        this.setState({ [e.target.name]: e.target.value });
      },
    componentWillUnmount() {
        var data = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            dob: this.state.dob,
            heightFt: this.state.heightFt,
            heightIn: this.state.heightIn,
            weight: this.state.weight,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            activityLevel: this.state.activityLevel,
            timezone: this.state.timezone
        }
        this.props.saveProfile(data)
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
      componentDidMount() {
        console.log("My Test: "+this.props.profileData.firstName);
      },
  render: function() {
    return (
     <div>
         <Form className="structureFormProfile">
             {/* timezone */}
         <FormGroup className="timezone">
            <ControlLabel className="formInputTitle">Timezone</ControlLabel>
            {/* <TimezonePicker
            absolute      = {false}
            defaultValue  = "Europe/Moscow"
            placeholder   = "Select timezone..."
            onChange      = {this.handleChange}
          /> */}
        </FormGroup>
             {/* firstName */}
        <FormGroup validationState={this.validateFirstName("firstName")} className="firstName">
        <ControlLabel className="formInputTitle">{this.props.profileData ? "First Name" : this.props.profileData.firstName}</ControlLabel>
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
        <FormGroup className="middleName">
          <ControlLabel className="formInputTitle">Middle Name</ControlLabel>
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
        <FormGroup validationState={this.validateFirstName("lastName")} className="lastName">
          <ControlLabel className="formInputTitle">Last Name</ControlLabel>
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
          validationState={this.validateFirstName("dob")} className="dob"
        >
            <ControlLabel className="formInputTitle">Date of Birth</ControlLabel>
            <FormControl id="date" type="date" name="dob" onChange={this.handleChange}/>
            <FormControl.Feedback />
        </FormGroup>
            {/* Height */}
        <FormGroup validationState={this.validateFirstName("height")} className="height structureFormProfileHeight" >
            <ControlLabel className="formInputTitle title">Height</ControlLabel>
            <label className="feet"><FormControl componentClass="select" placeholder="feet" name="heightFt" value={this.state.heightFt}
        onChange={this.handleChange}>
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
            </label>
            <label className="inch"><FormControl componentClass="select" placeholder="inches" name="heightIn" value={this.state.heightIn}
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
            </label>
        </FormGroup>
            {/* Weight */}
        <FormGroup
          validationState={this.validateFirstName("weight")} className="weight"

        >
          <ControlLabel className="formInputTitle">Weight(lbs)</ControlLabel>
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
          validationState={this.validateFirstName("telephone")} className="phone"

        >
          <ControlLabel className="formInputTitle">Phone Number</ControlLabel>
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
        <FormGroup validationState={this.validateFirstName("gender")} className="gender" >
            <ControlLabel className="formInputTitle">Gender</ControlLabel>
            <FormControl componentClass="select" placeholder="Gender" name="gender" value={this.state.gender}
        onChange={this.handleChange} >
                <option value="select" disabled>Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </FormControl>
            <FormControl.Feedback />
        </FormGroup>
        <FormGroup validationState={this.validateFirstName("activityLevel")} className="activityLevel" >
            <ControlLabel className="formInputTitle">Activity Level</ControlLabel>
            <FormControl componentClass="select" placeholder="Activity Level" name="activityLevel" value={this.state.activityLevel}
        onChange={this.handleChange} >
                <option value="select" disabled>Activity Level</option>
                <option value="Very Active">Very Active</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </FormControl>
            <FormControl.Feedback />
        </FormGroup>





        {/* Physical Address */}
        <FormGroup>
      <ControlLabel className="formInputTitle">Physical Address</ControlLabel>
          <FormControl
          type="text"
          name="address"
          value={this.state.address}
          placeholder="Enter Address"
          onChange={this.handleChange}
          />
      <FormControl.Feedback />
      </FormGroup>
      {/* City */}
      <FormGroup>
      <ControlLabel className="formInputTitle">City</ControlLabel>
      <FormControl
      type="text"
      name="city"
      value={this.state.city}
      placeholder="Enter city"
      onChange={this.handleChange}
      />
      <FormControl.Feedback />
      </FormGroup>

      {/* State */}
      <FormGroup>
      <ControlLabel className="formInputTitle">State</ControlLabel>
      <FormControl componentClass="select" placeholder="State" name="state" value={this.state.state}
      onChange={this.handleChange} >
          <option value="" disabled="selected">Select a State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
      </FormControl>
      <FormControl.Feedback />
      </FormGroup>


        {/* zip code */}
        <FormGroup>
      <ControlLabel className="formInputTitle">Zip Code</ControlLabel>
      <FormControl
      type="text"
      name="zip"
      value={this.state.zip}
      placeholder="Enter zip"
      onChange={this.handleChange}
      />
      <FormControl.Feedback />
      </FormGroup>






      </Form>

   </div>

    );
  }
});

module.exports = Profile;
