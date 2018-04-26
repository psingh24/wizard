import React from 'react';

import Eula from './Wizard/Eula.js'
import Profile from './Wizard/Profile.js'
import Contacts from './Wizard/Contacts.js'
import Alerts from './Wizard/Alerts.js'
import Connect from './Wizard/Connect.js';
import Connect1 from './Wizard/Connect1.js'
import Connect2 from './Wizard/Connect2.js'
import Connect3 from './Wizard/Connect3.js'
import Connect4 from './Wizard/Connect4.js'
import Connect5 from './Wizard/Connect5.js'
import Success from './Wizard/Success.js'


class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.whichPageToRender = this.whichPageToRender.bind(this);
    }
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

    }
    render() {
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

}

export default MainContent;
