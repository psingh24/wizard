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
      profile: {}
    };
    this.handleChange = this.handleChange.bind(this);
  },

  continue: function(num) {
    // console.log("currentPage:"+this.state.currentPage)
    if (this.state.formCompleted) {
      this.setState((prevState, props) => ({
        currentPage: prevState.currentPage + num,
    }));
    }
  },
  back: function(num) {
    this.setState((prevState, props) => ({
      currentPage: prevState.currentPage - num
  }));
  },
  handleChange: function(evt) {
    var checked = evt.target.checked
    // console.log("checked: "+ checked)
    this.setState(prevState => ({
      formCompleted: checked
    }));
  },
  saveProfile(data) {
    this.setState({
      profile: data
    })
  },
  isEmpty(obj) { 
    for (var x in obj) { return false; }
    return true;
 },
  componentDidUpdate() {
    console.log("My Main Page Profile: " +this.state.profile.firstName)
  },

  render: function() {
    return (
      <div className="Grid">
        <SideBar sideBarText={this.state.sidebarText[this.state.currentPage]}/>
        
        <MainContent page={this.state.pages[this.state.currentPage]} 
                     formCompleted={this.state.formCompleted}
                     handleChange={this.handleChange}
                     saveProfile={this.saveProfile}
                     profileData={this.isEmpty(this.state.profile) ? true : this.state.profile}/>

        <Footer continue={this.continue} 
                back={this.back} 
                page={this.state.currentPage}/>
        </div>
    );
  }
});

module.exports = Main;
