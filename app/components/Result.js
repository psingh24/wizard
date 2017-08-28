var React = require("react");
var createReactClass = require('create-react-class');

var Result = createReactClass({
  render: function() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">Results</div>
        <div className="panel-body">

            <h1>{this.props.search}</h1>
    

        </div>
      </div>
    );
  }
});

module.exports = Result;
