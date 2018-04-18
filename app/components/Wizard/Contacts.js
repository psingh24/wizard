var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;
import { Form, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';


var Contacts = createReactClass({
    getInitialState: function() {
        return {
            name: '',
            email: '',
            relationship: '',
            phoneNumber: '',
            contactMethod: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            contacts: 
               [     {
                    name: 'bob',
                    email: 'bob@gmail.com',
                    relationship: 'Parent',
                    phoneNumber: '1231231231',
                    contactMethod: 'SMS',
                    address: '123 Fake St.',
                    city: 'Dallas',
                    state: 'Tx',
                    zip: '76021'
                },
                 {
                    name: 'test',
                    email: 'bob@gmail.com',
                    relationship: 'Parent',
                    phoneNumber: '1231231231',
                    contactMethod: 'SMS',
                    address: '123 Fake St.',
                    city: 'Dallas',
                    state: 'Tx',
                    zip: '76021'
                }
            ]
            
        }
    },
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      },
    validate(id) {
        switch (id) {
            case "name": {
                var length = this.state.name.length;
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
            case "contactMethod": {
                var value = this.state.contactMethod;
                if (value) return 'success';
                else return 'error';
                return null;
            }
            case "email": {
                var regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var email = this.state.email;
                if (email.match(regex)) return 'success';
                else return 'error';
                return null;
            }
        }
      },
  render: function() {
    var content = '';

    if(this.state.contacts.length === 0) {
        content = <div>empty</div>
    } else {

        content = this.state.contacts.map(function(object) {
            return (<div key={object.name}>
                        <div>Name: {object.name}</div>
                        <div>Number: {object.phoneNumber}</div>
                        <div>Email: {object.email}</div>
                        <div>Method: {object.contactMethod}</div>
                        <div>Relationship: {object.relationship}</div>
                    </div>)
          })
    
    }
    return (
        <div>
          {content}
        </div>
    //  <div>Contacts

    //     <div className="form">
    //     <Form>
    //         {/* Name */}
    //     <FormGroup
    //     validationState={this.validate("name")}
    //     >
    //     <ControlLabel>Name *</ControlLabel>
    //         <FormControl
    //         type="text"
    //         name="name"
    //         value={this.state.name}
    //         placeholder="Enter Name"
    //         onChange={this.handleChange}
    //         />
    //     <FormControl.Feedback />
    //     </FormGroup>
    //     {/* Email */}
    //     <FormGroup  validationState={this.validate("email")}>
    //     <ControlLabel>Email</ControlLabel>
    //     <FormControl
    //     type="text"
    //     name="email"
    //     value={this.state.email}
    //     placeholder="Enter email"
    //     onChange={this.handleChange}
    //     />
    //     <FormControl.Feedback />
    //     </FormGroup>

    //     {/* Relationship */}
    //     <FormGroup>
    //     <ControlLabel>Relationship</ControlLabel>
    //     <FormControl componentClass="select" placeholder="Select Relationship" name="relationship" value={this.state.relationship} 
    //     onChange={this.handleChange} >
    //         <option value="select" disabled>Select Relationship</option>
    //         <option value="Parent">Parent</option>
    //         <option value="Spouse">Spouse</option>
    //         <option value="Son/Daughter">Son/Daughter</option>
    //         <option value="Sibling">Sibling</option>
    //         <option value="Aunt/Uncle">Aunt/Uncle</option>
    //         <option value="Extended Family">Extended Family</option>
    //         <option value="Other">Other</option>
    //     </FormControl>
    //     <FormControl.Feedback />
    //     </FormGroup>

    //     {/* telephone */}
    //     <FormGroup>
    //     <ControlLabel>Phone Number</ControlLabel>
    //     <FormControl
    //     type="text"
    //     name="phoneNumber"
    //     value={this.state.phoneNumber}
    //     placeholder="Enter Phone Number"
    //     onChange={this.handleChange}
    //     />
    //     <FormControl.Feedback />
    //     </FormGroup>


    //     {/* Perferred contact method */}
    //     <FormGroup validationState={this.validate("contactMethod")}>
    //     <ControlLabel>Preferred Contact Method *</ControlLabel>
    //     <FormControl componentClass="select" placeholder="Preferred Contact Method" name="contactMethod" value={this.state.contactMethod} 
    //     onChange={this.handleChange} >
    //         <option value="select" disabled>Preferred Contact Method</option>
    //         <option value="Email">Email</option>
    //         <option value="SMS">SMS</option>
    //     </FormControl>
    //     <FormControl.Feedback />
    //     </FormGroup>

    //       {/* Physical Address */}
    //       <FormGroup>
    //     <ControlLabel>Physical Address</ControlLabel>
    //         <FormControl
    //         type="text"
    //         name="address"
    //         value={this.state.address}
    //         placeholder="Enter Address"
    //         onChange={this.handleChange}
    //         />
    //     <FormControl.Feedback />
    //     </FormGroup>
    //     {/* City */}
    //     <FormGroup>
    //     <ControlLabel>City</ControlLabel>
    //     <FormControl
    //     type="text"
    //     name="city"
    //     value={this.state.city}
    //     placeholder="Enter city"
    //     onChange={this.handleChange}
    //     />
    //     <FormControl.Feedback />
    //     </FormGroup>

    //     {/* State */}
    //     <FormGroup>
    //     <ControlLabel>State</ControlLabel>
    //     <FormControl componentClass="select" placeholder="State" name="state" value={this.state.state} 
    //     onChange={this.handleChange} >
    //         <option value="" disabled="selected">Select a State</option>
    //         <option value="AL">Alabama</option>
    //         <option value="AK">Alaska</option>
    //         <option value="AZ">Arizona</option>
    //         <option value="AR">Arkansas</option>
    //         <option value="CA">California</option>
    //         <option value="CO">Colorado</option>
    //         <option value="CT">Connecticut</option>
    //         <option value="DE">Delaware</option>
    //         <option value="DC">District Of Columbia</option>
    //         <option value="FL">Florida</option>
    //         <option value="GA">Georgia</option>
    //         <option value="HI">Hawaii</option>
    //         <option value="ID">Idaho</option>
    //         <option value="IL">Illinois</option>
    //         <option value="IN">Indiana</option>
    //         <option value="IA">Iowa</option>
    //         <option value="KS">Kansas</option>
    //         <option value="KY">Kentucky</option>
    //         <option value="LA">Louisiana</option>
    //         <option value="ME">Maine</option>
    //         <option value="MD">Maryland</option>
    //         <option value="MA">Massachusetts</option>
    //         <option value="MI">Michigan</option>
    //         <option value="MN">Minnesota</option>
    //         <option value="MS">Mississippi</option>
    //         <option value="MO">Missouri</option>
    //         <option value="MT">Montana</option>
    //         <option value="NE">Nebraska</option>
    //         <option value="NV">Nevada</option>
    //         <option value="NH">New Hampshire</option>
    //         <option value="NJ">New Jersey</option>
    //         <option value="NM">New Mexico</option>
    //         <option value="NY">New York</option>
    //         <option value="NC">North Carolina</option>
    //         <option value="ND">North Dakota</option>
    //         <option value="OH">Ohio</option>
    //         <option value="OK">Oklahoma</option>
    //         <option value="OR">Oregon</option>
    //         <option value="PA">Pennsylvania</option>
    //         <option value="RI">Rhode Island</option>
    //         <option value="SC">South Carolina</option>
    //         <option value="SD">South Dakota</option>
    //         <option value="TN">Tennessee</option>
    //         <option value="TX">Texas</option>
    //         <option value="UT">Utah</option>
    //         <option value="VT">Vermont</option>
    //         <option value="VA">Virginia</option>
    //         <option value="WA">Washington</option>
    //         <option value="WV">West Virginia</option>
    //         <option value="WI">Wisconsin</option>
    //         <option value="WY">Wyoming</option>
    //     </FormControl>
    //     <FormControl.Feedback />
    //     </FormGroup>


    //       {/* zip code */}
    //       <FormGroup>
    //     <ControlLabel>Zip Code</ControlLabel>
    //     <FormControl
    //     type="text"
    //     name="zip"
    //     value={this.state.zip}
    //     placeholder="Enter zip"
    //     onChange={this.handleChange}
    //     />
    //     <FormControl.Feedback />
    //     </FormGroup>
    //     </Form>
    //     </div>
    //  </div>
     
        
    );
  }
});

module.exports = Contacts;
