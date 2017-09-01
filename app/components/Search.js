var React = require("react");
var createReactClass = require('create-react-class');

var Result = require("./Result");

import {
  Link
} from 'react-router-dom'

var Search = createReactClass({

 getInitialState: function() {
    return { term: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    console.log(event.target.value)

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },

  render: function() {
    return (
        <div>
      <div className="panel panel-info">
        <div className="panel-heading">Search for your favorite subreddit</div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={this.state.term}
                onChange={this.handleChange}
              />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search" />
                </button>
              </div>
            </div>
          </form>
           <Link to="/saved"><button className="btn btn-warning btn-sm">Saved Articles</button></Link>
        </div>
      </div>
     
      </div>
    );
  }
});

module.exports = Search;
