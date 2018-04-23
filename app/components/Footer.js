var React = require("react");
var createReactClass = require("create-react-class");
var Nav = require("./Nav");
var Link = require("react-router").Link;



var Footer = createReactClass({
 
    handleContinue() {
        event.preventDefault();
        this.props.continue(1);
    },
    handleBack() {
        event.preventDefault();
        this.props.back(1);
    },
    render: function() {
    return (

        <div className="footer">
            <div className="event-back">

            {this.props.page > 0
            ? <a onClick={this.handleBack} href="#" className="footer-btn"><span className="chevron-event"><img src="assets/image/icon-chevron-left.svg" className="chevron" alt=""/></span> Back</a>
            : <div></div>}
            </div>

            <div></div>
            <div className="event-forward">
                <a className="footer-btn" onClick={this.handleContinue} href="#">Continue <span className="chevron-event"><img src="assets/image/icon-chevron-right.svg" className="chevron" alt=""/></span></a>
            </div>
            {/* page validattion */}
            {/* {this.props.formCompleted ? <div className="event-forward">
                <a className="footer-btn" onClick={this.handleContinue} href="#">Continue <span className="chevron-event"><img src="assets/image/icon-chevron-right.svg" className="chevron" alt=""/></span></a>
            </div> :  <div></div>} */}
        </div>
    );
  }
});

module.exports = Footer;
