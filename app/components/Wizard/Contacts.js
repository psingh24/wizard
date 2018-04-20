var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;
import { Form, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Button, ButtonToolbar } from 'react-bootstrap';


var Contacts = createReactClass({
    getInitialState: function() {
        return {
            firstName: '',
            middleName: '',
            lastName: '',
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
                    firstName: 'bob',
                    middleName: '',
                    lastName: 'bob',
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
                     firstName: 'joe',
                     middleName: '',
                     lastName: 'cool',
                     email: 'jan@gmail.com',
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
      addContact() {
        console.log("fired")
        var data = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            email: this.state.email,
            relationship: this.state.relationship,
            phoneNumber: this.state.phoneNumber,
            contactMethod: this.state.contactMethod,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        this.props.addContactsToState(data)
        this.setState({
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            relationship: '',
            phoneNumber: '',
            contactMethod: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })
        this.props.contactFormLogic("AddToContacts");
        console.log(this.props.contactData)
    },
      returnForm(id) {
        //   console.log("id: "+id)
        //   var contact = id;
        //   if (contact >= 0) {
        //       console.log("return form with data")
        //       return ( 
        //         <FormGroup validationState={this.validate("firstName")} className="firstName">
        //         <ControlLabel className="formInputTitle">First Name *</ControlLabel>
        //             <FormControl
        //             type="text"
        //             name="firstName"
        //             value={this.props.contactData[id].firstName}
        //             placeholder="First Name"
        //             onChange={this.handleChange}
        //             />
        //         <FormControl.Feedback />
        //         </FormGroup>
        //     )
        //   }    else {
        //       console.log("empty form")
        //       return ( 
        //             <FormGroup validationState={this.validate("firstName")} className="firstName">
        //             <ControlLabel className="formInputTitle">First Name *</ControlLabel>
        //                 <FormControl
        //                 type="text"
        //                 name="firstName"
        //                 value={this.state.firstName}
        //                 placeholder="First Name"
        //                 onChange={this.handleChange}
        //                 />
        //             <FormControl.Feedback />
        //             </FormGroup>
        //         )
        //   }
        return (<div className="form">
        <Form className="structureFormContacts">
        {/* Relationship */}
        <FormGroup className="relationship">
        <ControlLabel className="formInputTitle">Relationship</ControlLabel>
        <FormControl componentClass="select" placeholder="Select Relationship" name="relationship" value={this.state.relationship}
        onChange={this.handleChange} >
            <option value="select" disabled>Select Relationship</option>
            <option value="Parent">Parent</option>
            <option value="Spouse">Spouse</option>
            <option value="Son/Daughter">Son/Daughter</option>
            <option value="Sibling">Sibling</option>
            <option value="Aunt/Uncle">Aunt/Uncle</option>
            <option value="Extended Family">Extended Family</option>
            <option value="Other">Other</option>
        </FormControl>
        <FormControl.Feedback />
        </FormGroup>



            {/* First Name */}
        <FormGroup validationState={this.validate("firstName")} className="firstName">
        <ControlLabel className="formInputTitle">First Name *</ControlLabel>
            <FormControl
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
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
        placeholder="Middle Name"
        onChange={this.handleChange}
        />
        <FormControl.Feedback />
        </FormGroup>

         {/* Last Name */}
        <FormGroup validationState={this.validate("lastName")} className="lastName">
        <ControlLabel className="formInputTitle">Last Name *</ControlLabel>
        <FormControl
        type="text"
        name="lastName"
        value={this.state.lastName}
        placeholder="Last Name"
        onChange={this.handleChange}
        />
        <FormControl.Feedback />
        </FormGroup>




        {/* Email */}
        <FormGroup  validationState={this.validate("email")} className="email">
        <ControlLabel className="formInputTitle">Email</ControlLabel>
        <FormControl
        type="text"
        name="email"
        value={this.state.email}
        placeholder="Enter email"
        onChange={this.handleChange}
        />
        <FormControl.Feedback />
        </FormGroup>



        {/* telephone */}
        <FormGroup className="phone">
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


        {/* Perferred contact method */}
        <FormGroup validationState={this.validate("contactMethod")} className="preferredContact">
        <ControlLabel className="formInputTitle">Preferred Contact Method *</ControlLabel>
        <FormControl componentClass="select" placeholder="Preferred Contact Method" name="contactMethod" value={this.state.contactMethod}
        onChange={this.handleChange} >
            <option value="select" disabled>Preferred Contact Method</option>
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
        </FormControl>
        <FormControl.Feedback />
        </FormGroup>

        {/* Physical Address */}
        <FormGroup className="address">
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
        <FormGroup className="city">
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

        <div className="stateZipcode">


        <FormGroup className="state">
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
        <FormGroup className="zip">
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
        </div>


          {/* <ButtonToolbar className="contactsBack">
              <Button bsStyle="info"><span className="glyphicon glyphicon-chevron-left"></span> Back To Contacts</Button>
          </ButtonToolbar>
          <ButtonToolbar className="contactsSave">
              <Button bsStyle="primary" onClick={this.addContact}><span className="glyphicon glyphicon glyphicon-plus"></span> Add To Contacts</Button>
          </ButtonToolbar> */}




        </Form>
        </div>)
      },
      returnContacts() {
          return this.props.contactData.map((contact, i) => {
            return (
                <div key={i}>
                <div>Name: {contact.firstName + " " + contact.lastName}</div>
                <div>Phone Number: {contact.phoneNumber}</div>
                <div>Email: {contact.email}</div>
                <div>Contact Method: {contact.contactMethod}</div>
                <div>Relationship: {contact.relationship}</div>
                {this.props.contactData.length <= 1 ? "" :<Button onClick={() => this.deleteContact(i)}>Delete Button</Button>}
                <Button onClick={() => this.editContact(i)}>Edit Button</Button>
            </div>)
        })

                         
      },
    
      deleteContact(id) {
          this.props.deleteContact(id);
          if (this.props.contactData.length < 1) {
            this.props.contactFormLogic("Delete");
          }
      },
      editContact(id) {
        this.returnForm(id);
        this.props.contactFormLogic("Edit");
      },
  render: function() {
      var content;
    

      if (this.props.test > 0) {
          console.log("true")
          content = this.returnContacts()
      } else {
        console.log("false")
        content = this.returnForm();
    }

    return (
        <div>
          {content}
          {this.props.test > 0 ? <Button className="AddContact" onClick={() => {this.props.contactFormLogic("Add")}} >Add Contact</Button> :
            <div>
            <ButtonToolbar className="contactsBack">
              {this.props.contactData.length > 0 ? <Button bsStyle="info" onClick={() => {this.props.contactFormLogic("Back")}}><span className="glyphicon glyphicon-chevron-left"></span> Back To Contacts</Button> : ""}
          </ButtonToolbar>
          <ButtonToolbar className="contactsSave">
              <Button bsStyle="primary" onClick={this.addContact}><span className="glyphicon glyphicon glyphicon-plus"></span> Add To Contacts</Button>
          </ButtonToolbar>
            </div>

        }
        </div>

//start 0 contacts -> render form
//Click add contact -> 1 contact -> render contacts click add addtional contact -> render form

    );
  }
});

module.exports = Contacts;
