var React = require("react");
var createReactClass = require("create-react-class");

var App = require("../app");

var Nav = require("./Nav");
var Search = require("./Search");
var Result = require("./Result");

var Link = require("react-router").Link;

var helpers = require("../utlis/helpers");

var Main = createReactClass({
  getInitialState: function() {
    return { searchTerm: "", id: "", savedResults: "", test: "", results: [], notes: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getData().then(
      function(response) {
        // console.log(response);
        if (response !== this.state.results) {

          this.setState({ results: response.data });
        }
      }.bind(this)
    );


  },

 
  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {
  
    // if(this.state.id !== "") {
    //      helpers.saveData(this.state.id).then(function(response) {
    //         // After we've done the post... then get the updated history
    //       helpers.getData().then(
    //         function(response) {
    //           // console.log(response);
    //           if (response !== this.state.results) {
    //             // console.log("History", response.data);
    //             this.setState({ results: response.data });
    //           }
    //         }.bind(this)
    //       );

    // }.bind(this))
    // }
 




   var upCaseSearch = this.state.searchTerm.toUpperCase()
    
   if(upCaseSearch !== this.state.test) {

      this.setState({ test: upCaseSearch });
// After we've received the result... then post the search term to our history.
      helpers.postData(this.state.searchTerm).then(
        function(data) {
          this.setState({ date: true });

          // After we've done the post... then get the updated history
          helpers.getData().then(
            function(response) {
              // console.log(response);
              if (response !== this.state.results) {
                // console.log("History", response.data);
                this.setState({ results: response.data });
              }
            }.bind(this)
          );
        }.bind(this)
      );
    }
  },

  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

  setId: function(value) {
    this.setState({ id: value });
  },



  render: function() {
    return (
      <div>
        <Nav />
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <Search setTerm={this.setTerm} />
            </div>
            <div className="col-md-8">
              <Result results={this.state.results} setId={this.setId}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Main;
