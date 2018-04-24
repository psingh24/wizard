import { HTML5_FMT } from "moment";

var React = require("react");
var createReactClass = require("create-react-class");
var Nav = require("./Nav");
var Link = require("react-router").Link;

var Footer = createReactClass({
  handleContinue() {
    event.preventDefault();
    this.props.continue(1, this.props.page);
  },
  handleBack() {
    event.preventDefault();
    this.props.back(1);
  },
  render: function() {
    return (
      <div className="footer">
        <div className="event-back">
          {this.props.page > 0 ? (
            <a onClick={this.handleBack} href="#" className="footer-btn">
              <span className="chevron-event">
                <img
                  src="assets/image/icon-chevron-left.svg"
                  className="chevron"
                  alt=""
                />
              </span>{" "}
              Back
            </a>
          ) : (
            <div />
          )}
        </div>

        <div>
          <p className="errorMessage">{this.props.errorMessage}</p>
        </div>

        {this.props.page > 9 ? (
          ""
        ) : (
          <div className="event-forward">
            <a className="footer-btn" onClick={this.handleContinue} href="#">
              Continue{" "}
              <span className="chevron-event">
                <img
                  src="assets/image/icon-chevron-right.svg"
                  className="chevron"
                  alt=""
                />
              </span>
            </a>
          </div>
        )}
        {/* <div className="event-forward">
                <a className="footer-btn" onClick={this.handleContinue} href="#">Continue <span className="chevron-event"><img src="assets/image/icon-chevron-right.svg" className="chevron" alt=""/></span></a>
            </div>  */}
      </div>
    );
  }
});

module.exports = Footer;
