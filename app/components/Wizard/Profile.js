// var React = require("react");
import React from 'react';
// var createReactClass = require("create-react-class");
// import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';

// var Link = require("react-router").Link;


// import '../../../node_modules/react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

import { Form, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Checkbox } from 'react-bootstrap';


export default function Profile(props) {
    return (
        <div>
            <Form className="structureFormProfile">
   
   
   
           {/*timezone*/}
           <FormGroup className="timezone">
           <ControlLabel className="formInputTitle">Timezone</ControlLabel>
           
           <FormControl componentClass="select" placeholder="Time Zone" name="timeZone" value={props.profileData.timezone}
           onChange={props.handleProfileChange} >
           <option value="select" disabled>Time Zone</option>
           <option value="-12.0 Eniwetok, Kwajalein">(GMT -12:00) Eniwetok, Kwajalein</option>
           <option value="-11.0  Midway Island, Samoa">(GMT -11:00) Midway Island, Samoa</option>
           <option value="-10.0">(GMT -10:00) Hawaii</option>
           <option value="-9.0">(GMT -9:00) Alaska</option>
           <option value="-8.0">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
           <option value="-7.0">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
           <option value="-6.0">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
           <option value="-5.0">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
           <option value="-4.0">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
           <option value="-3.5">(GMT -3:30) Newfoundland</option>
           <option value="-3.0">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
           <option value="-2.0">(GMT -2:00) Mid-Atlantic</option>
           <option value="-1.0">(GMT -1:00 hour) Azores, Cape Verde Islands</option>
           <option value="0.0">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
           <option value="1.0">(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris</option>
           <option value="2.0">(GMT +2:00) Kaliningrad, South Africa</option>
           <option value="3.0">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
           <option value="3.5">(GMT +3:30) Tehran</option>
           <option value="4.0">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
           <option value="4.5">(GMT +4:30) Kabul</option>
           <option value="5.0">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
           <option value="5.5">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
           <option value="5.75">(GMT +5:45) Kathmandu</option>
           <option value="6.0">(GMT +6:00) Almaty, Dhaka, Colombo</option>
           <option value="7.0">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
           <option value="8.0">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
           <option value="9.0">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
           <option value="9.5">(GMT +9:30) Adelaide, Darwin</option>
           <option value="10.0">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
           <option value="11.0">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
           <option value="12.0">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
               </FormControl>
           <FormControl.Feedback />
           </FormGroup>
   
   
                   {/* firstName */}
            <FormGroup validationState={props.validate('firstName')} className="firstName">
            <ControlLabel className="formInputTitle">First Name *</ControlLabel>
                <FormControl
                type="text"
                name="firstName"
                value={props.profileData.firstName}
                placeholder="Enter First Name"
                onChange={props.handleProfileChange}
                />
                <FormControl.Feedback />
            </FormGroup>
   
                {/*Middle Name*/}
           <FormGroup className="middleName">
               <ControlLabel className="formInputTitle">Middle Name</ControlLabel>
               <FormControl
               type="text"
               name="middleName"
               value={props.profileData.middleName}
               placeholder="Enter Middle Name"
               onChange={props.handleProfileChange}
               />
               <FormControl.Feedback />
           </FormGroup>
               {/* Last Name */}
           <FormGroup validationState={props.validate("lastName")} className="lastName">
               <ControlLabel className="formInputTitle">Last Name *</ControlLabel>
               <FormControl
               type="text"
               name="lastName"
               value={props.profileData.lastName}
               placeholder="Enter Last Names"
               onChange={props.handleProfileChange}
               />
               <FormControl.Feedback />
           </FormGroup>
   
               {/* Date of Birth */}
           <FormGroup
               validationState={props.validate("dob")} className="dob"
           >
               <ControlLabel className="formInputTitle">Date of Birth *</ControlLabel>
               <FormControl id="date" type="date" name="dob" value={props.profileData.dob} onChange={props.handleProfileChange}/>
               <FormControl.Feedback />
           </FormGroup>
               {/* Height */}
           <FormGroup validationState={props.validate("height")} className="height structureFormProfileHeight" >
               <ControlLabel className="formInputTitle">Height *</ControlLabel>
               <label className="feet"><FormControl componentClass="select" placeholder="feet" name="heightFt" value={props.profileData.heightFt}
           onChange={props.handleProfileChange}>
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
   
               </label>
               <label className="inch"><FormControl componentClass="select" placeholder="inches" name="heightIn" value={props.profileData.heightIn}
           onChange={props.handleProfileChange} >
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
               <FormControl.Feedback />
           </FormGroup>
               {/* Weight */}
           <FormGroup
               validationState={props.validate("weight")} className="weight"
   
           >
               <ControlLabel className="formInputTitle">Weight(lbs) *</ControlLabel>
               <FormControl
               type="text"
               name="weight"
               value={props.profileData.weight}
               placeholder="Enter Weight"
               onChange={props.handleProfileChange}
               />
               <FormControl.Feedback />
           </FormGroup>
           {/* phone number */}
           <FormGroup
               validationState={props.validate("telephone")} className="phone"
   
           >
               <ControlLabel className="formInputTitle">Phone Number *</ControlLabel>
               <FormControl
               type="text"
               name="phoneNumber"
               value={props.profileData.phoneNumber}
               placeholder="Enter Phone Number"
               onChange={props.handleProfileChange}
               />
               <FormControl.Feedback />
           </FormGroup>
           {/* Gender */}
           <FormGroup validationState={props.validate("gender")} className="gender" >
               <ControlLabel className="formInputTitle">Gender *</ControlLabel>
               <FormControl componentClass="select" placeholder="Gender" name="gender" value={props.profileData.gender}
           onChange={props.handleProfileChange} >
                   <option value="select" disabled>Gender</option>
                   <option value="male">male</option>
                   <option value="female">female</option>
               </FormControl>
               <FormControl.Feedback />
           </FormGroup>
           {/* Activity Level */}
           <FormGroup validationState={props.validate("activityLevel")} className="activityLevel" >
               <ControlLabel className="formInputTitle">Activity Level *</ControlLabel>
               <FormControl componentClass="select" placeholder="Activity Level" name="activityLevel" value={props.profileData.activityLevel}
           onChange={props.handleProfileChange} >
                   <option value="select" disabled>Activity Level</option>
                   <option value="Very Active">Very Active</option>
                   <option value="Active">Active</option>
                   <option value="Inactive">Inactive</option>
               </FormControl>
               <FormControl.Feedback />
           </FormGroup>
   
           {/* Amazon Alexa */}
           <FormGroup className="amazonAlexa">
               <Checkbox name="abnormalHeartRateChecked" name="amazonAlexa" checked={props.profileData.amazonAlexa ? "checked" : false} onChange={props.handleProfileChange}>I would like to be identified by this number and this number can be used with Amazon Alexa.</Checkbox>
           </FormGroup>
   
   
           {/* Physical Address */}
           <FormGroup className="address">
         <ControlLabel className="formInputTitle">Physical Address</ControlLabel>
             <FormControl
             type="text"
             name="address"
             value={props.profileData.address}
             placeholder="Enter Address"
             onChange={props.handleProfileChange}
             />
         <FormControl.Feedback />
         </FormGroup>
         {/* City */}
         <FormGroup className="city">
         <ControlLabel className="formInputTitle">City</ControlLabel>
         <FormControl
         type="text"
         name="city"
         value={props.profileData.city}
         placeholder="Enter city"
         onChange={props.handleProfileChange}
         />
         <FormControl.Feedback />
         </FormGroup>
   
         {/* State */}
   
           <div className="stateZipcode">
   
   
         <FormGroup className="state">
         <ControlLabel className="formInputTitle">State</ControlLabel>
         <FormControl componentClass="select" placeholder="State" name="state" value={props.profileData.state}
         onChange={props.handleProfileChange} >
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
         value={props.profileData.zip}
         placeholder="Enter zip"
         onChange={props.handleProfileChange}
         />
         <FormControl.Feedback />
         </FormGroup>
         </div>
   
   
   
   
   
   
         </Form>
   
      </div>
   
       );
}

// var Profile = createReactClass({
//     componentDidMount() {
//         console.log(this.props);
//       },
//   render: function() {
//     return (
//      <div>
//          <Form className="structureFormProfile">



//         {/*timezone*/}
//         <FormGroup className="timezone">
//         <ControlLabel className="formInputTitle">Timezone</ControlLabel>
        
//         <FormControl componentClass="select" placeholder="Time Zone" name="timeZone" value={this.props.profileData.timezone}
//         onChange={this.props.handleProfileChange} >
//         <option value="select" disabled>Time Zone</option>
//         <option value="-12.0 Eniwetok, Kwajalein">(GMT -12:00) Eniwetok, Kwajalein</option>
//         <option value="-11.0  Midway Island, Samoa">(GMT -11:00) Midway Island, Samoa</option>
//         <option value="-10.0">(GMT -10:00) Hawaii</option>
//         <option value="-9.0">(GMT -9:00) Alaska</option>
//         <option value="-8.0">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
//         <option value="-7.0">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
//         <option value="-6.0">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
//         <option value="-5.0">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
//         <option value="-4.0">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
//         <option value="-3.5">(GMT -3:30) Newfoundland</option>
//         <option value="-3.0">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
//         <option value="-2.0">(GMT -2:00) Mid-Atlantic</option>
//         <option value="-1.0">(GMT -1:00 hour) Azores, Cape Verde Islands</option>
//         <option value="0.0">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
//         <option value="1.0">(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris</option>
//         <option value="2.0">(GMT +2:00) Kaliningrad, South Africa</option>
//         <option value="3.0">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
//         <option value="3.5">(GMT +3:30) Tehran</option>
//         <option value="4.0">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
//         <option value="4.5">(GMT +4:30) Kabul</option>
//         <option value="5.0">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
//         <option value="5.5">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
//         <option value="5.75">(GMT +5:45) Kathmandu</option>
//         <option value="6.0">(GMT +6:00) Almaty, Dhaka, Colombo</option>
//         <option value="7.0">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
//         <option value="8.0">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
//         <option value="9.0">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
//         <option value="9.5">(GMT +9:30) Adelaide, Darwin</option>
//         <option value="10.0">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
//         <option value="11.0">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
//         <option value="12.0">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
//             </FormControl>
//         <FormControl.Feedback />
//         </FormGroup>


//                 {/* firstName */}
//          <FormGroup validationState={this.props.validate('firstName')} className="firstName">
//          <ControlLabel className="formInputTitle">First Name *</ControlLabel>
//              <FormControl
//              type="text"
//              name="firstName"
//              value={this.props.profileData.firstName}
//              placeholder="Enter First Name"
//              onChange={this.props.handleProfileChange}
//              />
//              <FormControl.Feedback />
//          </FormGroup>

//              {/*Middle Name*/}
//         <FormGroup className="middleName">
//             <ControlLabel className="formInputTitle">Middle Name</ControlLabel>
//             <FormControl
//             type="text"
//             name="middleName"
//             value={this.props.profileData.middleName}
//             placeholder="Enter Middle Name"
//             onChange={this.props.handleProfileChange}
//             />
//             <FormControl.Feedback />
//         </FormGroup>
//             {/* Last Name */}
//         <FormGroup validationState={this.props.validate("lastName")} className="lastName">
//             <ControlLabel className="formInputTitle">Last Name *</ControlLabel>
//             <FormControl
//             type="text"
//             name="lastName"
//             value={this.props.profileData.lastName}
//             placeholder="Enter Last Names"
//             onChange={this.props.handleProfileChange}
//             />
//             <FormControl.Feedback />
//         </FormGroup>

//             {/* Date of Birth */}
//         <FormGroup
//             validationState={this.props.validate("dob")} className="dob"
//         >
//             <ControlLabel className="formInputTitle">Date of Birth *</ControlLabel>
//             <FormControl id="date" type="date" name="dob" value={this.props.profileData.dob} onChange={this.props.handleProfileChange}/>
//             <FormControl.Feedback />
//         </FormGroup>
//             {/* Height */}
//         <FormGroup validationState={this.props.validate("height")} className="height structureFormProfileHeight" >
//             <ControlLabel className="formInputTitle">Height *</ControlLabel>
//             <label className="feet"><FormControl componentClass="select" placeholder="feet" name="heightFt" value={this.props.profileData.heightFt}
//         onChange={this.props.handleProfileChange}>
//                 <option value="select" disabled>Feet</option>
//                 <option value="1">1'</option>
//                 <option value="2">2'</option>
//                 <option value="3">3'</option>
//                 <option value="4">4'</option>
//                 <option value="5">5'</option>
//                 <option value="6">6'</option>
//                 <option value="7">7'</option>
//                 <option value="8">8'</option>
//                 <option value="9">9'</option>
//                 <option value="10">10'</option>
//             </FormControl>

//             </label>
//             <label className="inch"><FormControl componentClass="select" placeholder="inches" name="heightIn" value={this.props.profileData.heightIn}
//         onChange={this.props.handleProfileChange} >
//                 <option value="select" disabled>Inches</option>
//                 <option value="0">0"</option>
//                 <option value="1">1"</option>
//                 <option value="2">2"</option>
//                 <option value="3">3"</option>
//                 <option value="4">4"</option>
//                 <option value="5">5"</option>
//                 <option value="6">6"</option>
//                 <option value="7">7"</option>
//                 <option value="8">8"</option>
//                 <option value="9">9"</option>
//                 <option value="10">10"</option>
//                 <option value="11">11"</option>
//             </FormControl>
//             </label>
//             <FormControl.Feedback />
//         </FormGroup>
//             {/* Weight */}
//         <FormGroup
//             validationState={this.props.validate("weight")} className="weight"

//         >
//             <ControlLabel className="formInputTitle">Weight(lbs) *</ControlLabel>
//             <FormControl
//             type="text"
//             name="weight"
//             value={this.props.profileData.weight}
//             placeholder="Enter Weight"
//             onChange={this.props.handleProfileChange}
//             />
//             <FormControl.Feedback />
//         </FormGroup>
//         {/* phone number */}
//         <FormGroup
//             validationState={this.props.validate("telephone")} className="phone"

//         >
//             <ControlLabel className="formInputTitle">Phone Number *</ControlLabel>
//             <FormControl
//             type="text"
//             name="phoneNumber"
//             value={this.props.profileData.phoneNumber}
//             placeholder="Enter Phone Number"
//             onChange={this.props.handleProfileChange}
//             />
//             <FormControl.Feedback />
//         </FormGroup>
//         {/* Gender */}
//         <FormGroup validationState={this.props.validate("gender")} className="gender" >
//             <ControlLabel className="formInputTitle">Gender *</ControlLabel>
//             <FormControl componentClass="select" placeholder="Gender" name="gender" value={this.props.profileData.gender}
//         onChange={this.props.handleProfileChange} >
//                 <option value="select" disabled>Gender</option>
//                 <option value="male">male</option>
//                 <option value="female">female</option>
//             </FormControl>
//             <FormControl.Feedback />
//         </FormGroup>
//         {/* Activity Level */}
//         <FormGroup validationState={this.props.validate("activityLevel")} className="activityLevel" >
//             <ControlLabel className="formInputTitle">Activity Level *</ControlLabel>
//             <FormControl componentClass="select" placeholder="Activity Level" name="activityLevel" value={this.props.profileData.activityLevel}
//         onChange={this.props.handleProfileChange} >
//                 <option value="select" disabled>Activity Level</option>
//                 <option value="Very Active">Very Active</option>
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//             </FormControl>
//             <FormControl.Feedback />
//         </FormGroup>

//         {/* Amazon Alexa */}
//         <FormGroup className="amazonAlexa">
//             <Checkbox name="abnormalHeartRateChecked" name="amazonAlexa" checked={this.props.profileData.amazonAlexa ? "checked" : false} onChange={this.props.handleProfileChange}>I would like to be identified by this number and this number can be used with Amazon Alexa.</Checkbox>
//         </FormGroup>


//         {/* Physical Address */}
//         <FormGroup className="address">
//       <ControlLabel className="formInputTitle">Physical Address</ControlLabel>
//           <FormControl
//           type="text"
//           name="address"
//           value={this.props.profileData.address}
//           placeholder="Enter Address"
//           onChange={this.props.handleProfileChange}
//           />
//       <FormControl.Feedback />
//       </FormGroup>
//       {/* City */}
//       <FormGroup className="city">
//       <ControlLabel className="formInputTitle">City</ControlLabel>
//       <FormControl
//       type="text"
//       name="city"
//       value={this.props.profileData.city}
//       placeholder="Enter city"
//       onChange={this.props.handleProfileChange}
//       />
//       <FormControl.Feedback />
//       </FormGroup>

//       {/* State */}

//         <div className="stateZipcode">


//       <FormGroup className="state">
//       <ControlLabel className="formInputTitle">State</ControlLabel>
//       <FormControl componentClass="select" placeholder="State" name="state" value={this.props.profileData.state}
//       onChange={this.props.handleProfileChange} >
//           <option value="" disabled="selected">Select a State</option>
//           <option value="AL">Alabama</option>
//           <option value="AK">Alaska</option>
//           <option value="AZ">Arizona</option>
//           <option value="AR">Arkansas</option>
//           <option value="CA">California</option>
//           <option value="CO">Colorado</option>
//           <option value="CT">Connecticut</option>
//           <option value="DE">Delaware</option>
//           <option value="DC">District Of Columbia</option>
//           <option value="FL">Florida</option>
//           <option value="GA">Georgia</option>
//           <option value="HI">Hawaii</option>
//           <option value="ID">Idaho</option>
//           <option value="IL">Illinois</option>
//           <option value="IN">Indiana</option>
//           <option value="IA">Iowa</option>
//           <option value="KS">Kansas</option>
//           <option value="KY">Kentucky</option>
//           <option value="LA">Louisiana</option>
//           <option value="ME">Maine</option>
//           <option value="MD">Maryland</option>
//           <option value="MA">Massachusetts</option>
//           <option value="MI">Michigan</option>
//           <option value="MN">Minnesota</option>
//           <option value="MS">Mississippi</option>
//           <option value="MO">Missouri</option>
//           <option value="MT">Montana</option>
//           <option value="NE">Nebraska</option>
//           <option value="NV">Nevada</option>
//           <option value="NH">New Hampshire</option>
//           <option value="NJ">New Jersey</option>
//           <option value="NM">New Mexico</option>
//           <option value="NY">New York</option>
//           <option value="NC">North Carolina</option>
//           <option value="ND">North Dakota</option>
//           <option value="OH">Ohio</option>
//           <option value="OK">Oklahoma</option>
//           <option value="OR">Oregon</option>
//           <option value="PA">Pennsylvania</option>
//           <option value="RI">Rhode Island</option>
//           <option value="SC">South Carolina</option>
//           <option value="SD">South Dakota</option>
//           <option value="TN">Tennessee</option>
//           <option value="TX">Texas</option>
//           <option value="UT">Utah</option>
//           <option value="VT">Vermont</option>
//           <option value="VA">Virginia</option>
//           <option value="WA">Washington</option>
//           <option value="WV">West Virginia</option>
//           <option value="WI">Wisconsin</option>
//           <option value="WY">Wyoming</option>
//       </FormControl>
//       <FormControl.Feedback />
//       </FormGroup>


//         {/* zip code */}
//         <FormGroup className="zip">
//       <ControlLabel className="formInputTitle">Zip Code</ControlLabel>
//       <FormControl
//       type="text"
//       name="zip"
//       value={this.props.profileData.zip}
//       placeholder="Enter zip"
//       onChange={this.props.handleProfileChange}
//       />
//       <FormControl.Feedback />
//       </FormGroup>
//       </div>






//       </Form>

//    </div>

//     );
//   }
// });

// module.exports = Profile;
