var React = require("react");
var createReactClass = require("create-react-class");
var Nav = require("./Nav");
var Eula = require("./Wizard/Eula");
var Profile = require("./Wizard/Profile");
var Contacts = require("./Wizard/Contacts");
var Alerts = require("./Wizard/Alerts");
var Connect = require("./Wizard/Connect");
var Connect1 = require("./Wizard/Connect1");
var Connect2 = require("./Wizard/Connect2");
var Connect3 = require("./Wizard/Connect3");
var Connect4 = require("./Wizard/Connect4");
var Connect5 = require("./Wizard/Connect5");
var Success = require("./Wizard/Success");

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
                        <img src="assets/image/profileIcon.png" alt="" className="icon"/>
                        <Profile {...this.props}/>
                    </div>
                );
            }
            case "Contacts": {
                return (
                    <div>
                        <img src="assets/image/ContactsIcon.png" alt="" className="icon"/>
                        <Contacts {...this.props}/>
                    </div>
                );
            }
            case "Alerts": {
                return (
                    <div>
                        <img src="assets/image/SOSAlertIcon.png" alt="" className="icon"/>
                        <Alerts {...this.props}/>
                    </div>
                );
            }
            case "Connect": {
                return (
                    <div>
                        <img src="assets/image/ConnectIcon.png" alt="" className="icon"/>
                        <Connect />
                    </div>
                );
            }
            case "Connect1": {
                return (
                    <div>
                        <img src="assets/image/ConnectIcon.png" alt="" className="icon"/>
                        <Connect1 {...this.props}/>
                    </div>
                );
            }
            case "Connect2": {
                return (
                    <div>
                        <img src="assets/image/ConnectIcon.png" alt="" className="icon"/>
                        <Connect2 />
                    </div>
                );
            }
            case "Connect3": {
                return (
                    <div>
                        <img src="assets/image/ConnectIcon.png" alt="" className="icon"/>
                        <Connect3 {...this.props}/>
                    </div>
                );
            }
            case "Connect4": {
                return (
                    <div>
                        <img src="assets/image/ConnectIcon.png" alt="" className="icon"/>
                        <Connect4 {...this.props}/>
                    </div>
                );
            }
            case "Connect5": {
                return (
                    <div>
                        <h1>We're almost there...</h1>
                        <Connect5 />
                    </div>
                );
            }
            case "Sucess": {
                return (
                    <div>
                        <h1>Rediecting to Dashboard...</h1>
                        <h1>If the page does not redirect, click the "Go To Dashboard" Button.</h1>
                        <Success />
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
