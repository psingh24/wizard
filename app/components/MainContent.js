var React = require("react");
var createReactClass = require("create-react-class");
var Nav = require("./Nav");
var Eula = require("./Wizard/Eula");
var Profile = require("./Wizard/Profile");
var Contacts = require("./Wizard/Contacts");
var Alerts = require("./Wizard/Alerts");
var Connect = require("./Wizard/Connect");

var Link = require("react-router").Link;



var MainContent = createReactClass({
    whichPageToRender(page) {
        switch (page) {
            case "Eula": {
                return (
                    <div>
                        <img src="assets/image/logo.svg" alt="" className="logo"/>
                        <Eula {...this.props} />
                </div>
              );
            }
            case "Profile": {
                return (
                    <div>
                        <img src="assets/image/profileIcon.png" alt="" className="logo"/>
                        <Profile {...this.props}/>
                    </div>
                );
            }
            case "Contacts": {
                return (
                    <div>
                        <img src="assets/image/ContactsIcon.png" alt="" className="logo"/>
                        <Contacts />
                    </div>
                );
            }
            case "Alerts": {
                return (
                    <div>
                        <img src="assets/image/SOSAlertIcon.png" alt="" className="logo"/>
                        <Alerts />
                    </div>
                );
            }
            case "Connect": {
                return (
                    <div>
                        <img src="assets/image/ConnectIcon.png" alt="" className="logo"/>
                        <Connect />
                    </div>
                );
            }
        }

    },
    render: function() {
    var nameOfComponent = this.props.page;
    return (
    <div className="main">

      <div className="menu1"><img src="assets/image/icon-menu.svg" alt=""/></div>

      <div className="">
      </div>
      <div className="content">
        {/* <img src="assets/image/logo.svg" alt="" className="logo"/> */}

        {this.whichPageToRender(this.props.page)}
      </div>
      <div className="">
      </div>
    </div>
    );
  }
});


module.exports = MainContent;
