var React = require("react");
var createReactClass = require("create-react-class");
var Nav = require("./Nav");

var Link = require("react-router").Link;



var SideBar = createReactClass({
  render: function() {
    return (
        <div className="aside">
          <div className="help-text">
        <p>{this.props.sideBarText}</p></div>
      <div className="wiz"><img src="assets/image/dr-sense-bye-isolated.svg" alt="" className="wizard-img"/>

      </div>
        </div> 
    );
  }
});

module.exports = SideBar;
