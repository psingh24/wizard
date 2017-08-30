var React = require("react");
var createReactClass = require('create-react-class');

var Result = require("./Result");

import {
  Link
} from 'react-router-dom'

var Search = createReactClass({

    getInitialState: function() {
        return {
            value: ''
        }

    },
    handleChange: function(event) {
       this.setState({
                value: event.target.value
            });

            
    },

    handleSubmit(event) {

    console.log(this.state.value)
    event.preventDefault();
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
                value={this.state.value}
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
      <Result search={this.state.value}/>
      </div>
    );
  }
});

module.exports = Search;
