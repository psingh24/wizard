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
    event.preventDefault();
  

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

              <div className="row text-center options">
                <div className="col-md-6">
                  <Link to="/saved"><button className="btn btn-success btn-sm">Saved Articles</button></Link>
                </div>
                <div className="col-md-6"> 
                <form onSubmit={this.props.clear}>
                  <button className="btn btn-danger btn-sm">Clear Results</button>
                  </form>
                </div>
                </div>
              
            </div>
          </div>
        
      </div>
    );
  }
});

module.exports = Search;
