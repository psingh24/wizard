var React = require("react");

var createReactClass = require('create-react-class');

var ReactDOM = require("react-dom");

var Nav = require("./components/Nav");
var Search = require("./components/Search");
var Result = require("./components/Result");


var App = createReactClass({
     render: function () {
        return (
            <div>
                <Nav />

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Search />
                        </div>
                        <div className="col-md-8">
                            <Result />
                        </div>
                    </div>"
                </div>
            </div>
        )
    }

}) 
   

ReactDOM.render(<App />, document.getElementById("app"))