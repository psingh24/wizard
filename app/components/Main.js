var React = require("react");
var createReactClass = require("create-react-class");



var Nav = require("./Nav");
var SideBar = require("./Sidebar");
var MainContent = require("./MainContent");
var Footer = require("./Footer");

var Link = require("react-router").Link;



var Main = createReactClass({
  getInitialState: function() {
    return {
      pages: ["Eula", "Profile", "Contacts", "Alerts", "Connect", "Connect1", "Connect2", "Connect3", "Connect4", "Connect5", "Sucess"],
      sidebarText: ["Hello, I’m Dr. Sense. I’m here to guide you through set up. You can also ask me questions when logged into your dashboard. Let’s get started.", "Begin setting up your personal profile", "Add emergenacy contacts here. This is who will be alerted if you fall or need help", "This is where you can select which alerts you want enbaled. You can always change your settings later in the dashboard", "Now it is time to connect your VitalBand to the Internet. Make sure you have all the accesories that were included in the package.", "Let's run through a quick check list to make sure we're ready.", "Please read the follow these instructions to set up your hub", "You are now ready to connect your VitalBand", "Would you like to download the VitalBand mobile application? THe mobile application will provide you with protection outside of your home. The VitalBand will display a red line to remind you to launch your mobile app on your phone when you are not in the coverage range of your home hub.", "We are connecting now. The could take up to 30 seconds.", "Congratulations!"],
      currentPage: 0,
      EulaCompleted: false,
      contactFormPage: 0,
      profile: {
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
          zip: ''
        },
      contacts: [],
      editMode: [false, 0],
      alerts: {
        SOS: "",
        abnormalHeartRate: "",
        abnormalHeartRateChecked: false,
        max: 140,
        min: 50,
        battery: '',
        batteryChecked: false
      },
      errorMessage: ''
    };
  },

  continue: function(num, page) {
    console.log("Page:" + page)
    // if ( page === 0 ||page === 1 || page === 2 ) {
    //   console.log("fired")
    //   this.setState({errorMessage: "Please complete all the required fields to continue."})
    // }
     if ((this.state.EulaCompleted) && (page === 0)) {
        this.setState((prevState, props) => ({
          currentPage: prevState.currentPage + num,
        }));
        this.setState({errorMessage: ""})
    } else if (page === 0) {
      this.setState({errorMessage: "Please agree to the terms to continue."})
    }
    
    else if ((
      (this.state.profile.firstName.length > 1) && 
      (this.state.profile.lastName.length > 1) && 
      (this.state.profile.dob != '') && 
      (this.state.profile.heightFt != '') && 
      (this.state.profile.heightIn != '') && 
      (this.state.profile.weight != '') && 
      (this.state.profile.phoneNumber.length >8) && 
      (this.state.profile.gender != '') && 
      (this.state.profile.activityLevel != '')) && (page === 1)) {
        this.setState((prevState, props) => ({
          currentPage: prevState.currentPage + num,
        }));
        this.setState({errorMessage: ""})
    } 
    else if (page === 1) {
      this.setState({errorMessage: "Please complete all the required fields to continue."})
    }
    else if ((this.state.contacts.length > 0) && (page === 2)) {
        this.setState((prevState, props) => ({
          currentPage: prevState.currentPage + num,
        }));
        this.setState({errorMessage: ""})
    }
    else if (page === 2) {
      this.setState({errorMessage: "Please add atleast one contact to continue."})
    } 
    else if ((page > 2)) {
        this.setState((prevState, props) => ({
          currentPage: prevState.currentPage + num,
        }));
        this.setState({errorMessage: ""})
    } 
  },
  back: function(num) {
    this.setState((prevState, props) => ({
      currentPage: prevState.currentPage - num,
      errorMessage: ""
  }));
  },
  handleAlertsChange: function(evt) {
    var alerts = Object.assign({}, this.state.alerts);    //creating copy of object
    alerts[evt.target.name] = evt.target.value;                        //updating value
    this.setState({alerts});

  },
  handleEulaChange: function(evt) {
    var checked = evt.target.checked
    console.log("checked: "+ checked)
    this.setState(prevState => ({
      EulaCompleted: checked
    }));
    
  },
  handleProfileChange: function(e) {
    var profile = Object.assign({}, this.state.profile);    //creating copy of object
    profile[e.target.name] = e.target.value;                        //updating value
    this.setState({profile});
    this.profilePageCompleted()
  },
  addContactsToState(data, mode, id) {
    if (mode === "add"){
      this.setState({
        contacts: this.state.contacts.concat(data),
        formCompleted: true
      })
    } else if (mode === "edit") {
      this.deleteContact(id);
      var newArray = this.state.editMode.slice()
      newArray[0] = false; 
      newArray[1] = 0
      this.setState({
        contacts: this.state.contacts.concat(data),
        editMode: newArray
      })
    }
    else if (mode === 'error') {
      this.setState({errorMessage: "Please fill in all the required fields for the contact."})
    }
  },
  contactFormLogic() {
    this.state.contactFormPage === 1 ? this.setState({contactFormPage: 0}) : this.setState({contactFormPage: 1, errorMessage: ""})
  },
  handleEditModeContact(id, step) {
    var newArray = this.state.editMode.slice()
    if (step === "editPage") {
      newArray[0] = true;
      newArray[1] = id;
      this.setState({editMode: newArray})
    } else if (step === "backPage") {
      newArray[0] = false;
      newArray[1] = id;
      this.setState({editMode: newArray})
    }
  },
  deleteContact(id) {
    var array = this.state.contacts;
    var index = id;
    array.splice(index, 1);
    this.setState({contacts: array });
  },
  isEmpty(obj) { 
    for (var x in obj) { return false; }
    return true;
 },
 profilePageCompleted() {
   console.log("firedddd")
  if ((this.state.profile.firstName.length > 1) && 
  (this.state.profile.lastName.length > 1) && 
  (this.state.profile.dob != '') && 
  (this.state.profile.heightFt != '') && 
  (this.state.profile.heightIn != '') && 
  (this.state.profile.weight != '') && 
  (this.state.profile.phoneNumber.length >8) && 
  (this.state.profile.gender != '') && 
  (this.state.profile.activityLevel != '')) {
        console.log("fired")
        this.setState({formCompleted: true})
  }
 },
  componentDidUpdate() {
    console.log(this.state)
  },
  validate(id) {
    var value;
    switch (id) {
        case "firstName": {
            value = this.state.profile.firstName.length;
            if (value >= 3) return 'success';
            else if (value > 0) return 'warning';
            else if (value === 0) return 'error';
            return null;
        }
          case "lastName": {
              value = this.state.profile.lastName.length;
              if (value >= 3) return 'success';
              else if (value > 0) return 'warning';
              else if (value === 0) return 'error';
              return null;
          }
          case "weight": {
              value = this.state.profile.weight.length;
              if (value >= 1 && !isNaN(this.state.profile.weight)) return 'success';
              if (value >= 1 && isNaN(this.state.profile.weight)) return 'warning';
              else if (value === 0) return 'error';
              return null;
          }
          case "telephone": {
              value = this.state.profile.phoneNumber.length;
              if (value >= 10 && !isNaN(this.state.profile.phoneNumber)) return 'success';
              if (value >= 1 && !isNaN(this.state.profile.phoneNumber)) return 'warning';
              else if (value >= 1 && isNaN(this.state.profile.phoneNumber)) return 'warning';
              else if (value === 0) return 'error';
              return null;
          }
          case "dob": {
              value = this.state.profile.dob;
              if (value) return 'success';
              else return 'error';
              return null;
          }
          case "height": {
              var heightFt = this.state.profile.heightFt;
              var heightIn = this.state.profile.heightIn;
              if (heightFt && heightIn) return 'success';
              else return 'error';
              return null;
          }
          case "gender": {
              value = this.state.profile.gender;
              if (value) return 'success';
              else return 'error';
              return null;
          }
          case "activityLevel": {
              value = this.state.profile.activityLevel;
              if (value) return 'success';
              else return 'error';
              return null;
          }
      }
    },

  render: function() {
    return (
      <div className="Grid">
        <SideBar sideBarText={this.state.sidebarText[this.state.currentPage]}/>

        <MainContent  page={this.state.pages[this.state.currentPage]}
                      EulaCompleted={this.state.EulaCompleted}
                      handleChange={this.handleEulaChange}

                     handleProfileChange={this.handleProfileChange}
                     validate={this.validate}
                     profileData={this.isEmpty(this.state.profile) ? {} : this.state.profile}

                     contactData={this.state.contacts}
                     addContactsToState={this.addContactsToState}
                     contactFormPage={this.state.contactFormPage}
                     contactFormLogic={this.contactFormLogic}
                     deleteContact={this.deleteContact}
                     editMode={this.state.editMode}
                     handleEditModeContact={this.handleEditModeContact}

                     alertsData={this.state.alerts}
                     handleAlertsChange={this.handleAlertsChange}
                      />
        
        <Footer continue={this.continue}
                back={this.back}
                page={this.state.currentPage}
                formCompleted={this.state.formCompleted}
                errorMessage={this.state.errorMessage}/>
        </div>
    );
  }
});

module.exports = Main;
