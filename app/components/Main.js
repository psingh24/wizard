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
      pages: ["Eula", "Profile", "Contacts", "Alerts", "Connect"],
      sidebarText: ["Hello, I’m Dr. Sense. I’m here to guide you through set up. You can also ask me questions when logged into your dashboard. Let’s get started.", "Begin setting up your personal profile", "Add emergenacy contacts here. This is who will be alerted if you fall or need help", "This is where you can select which alerts you want enbaled. You can always change your settings later in the dashboard", "Now it is time to connect your VitalBand to the Internet. Make sure you have all the accesories that were included in the package."],
      currentPage: 0,
      formCompleted: false,
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
        }
    };
  },

  continue: function(num) {
  //  if (this.state.formCompleted) { /* commnet this line to keep moving without hacing to have anything line 44 and 49 */
      this.setState((prevState, props) => ({
        currentPage: prevState.currentPage + num,
        formCompleted: false
    }));
  // }/* commnet this line to keep moving without hacing to have anything line 44 and 49 */
  },
  back: function(num) {
    this.setState((prevState, props) => ({
      currentPage: prevState.currentPage - num,
      formCompleted: true
  }));
  },
  handleChange: function(evt) {
    var checked = evt.target.checked
    // console.log("checked: "+ checked)
    this.setState(prevState => ({
      formCompleted: checked
    }));
  },
  handleProfileChange: function(e) {
    let profile = Object.assign({}, this.state.profile);    //creating copy of object
    profile[e.target.name] = e.target.value;                        //updating value
    this.setState({profile});
  },
  isEmpty(obj) {
    for (var x in obj) { return false; }
    return true;
 },
  componentDidUpdate() {
    console.log("My Main Page Profile: " +this.state.profile.firstName)
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

        <MainContent page={this.state.pages[this.state.currentPage]}
                     formCompleted={this.state.formCompleted}
                     handleProfileChange={this.handleProfileChange}
                     handleChange={this.handleChange}
                     validate={this.validate}
                     profileData={this.isEmpty(this.state.profile) ? {} : this.state.profile}/>

        <Footer continue={this.continue}
                back={this.back}
                page={this.state.currentPage}/>
        </div>
    );
  }
});

module.exports = Main;
