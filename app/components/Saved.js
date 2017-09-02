var React = require("react");
var createReactClass = require("create-react-class");
import { Modal, Button } from 'react-bootstrap'

var SaveUnsaveButton = require("./SaveUnsaveButton")

var helpers = require("../utlis/helpers");
var Nav = require("./Nav");

var Saved = createReactClass({
  getInitialState: function() {
    return { savedResults: [], showModal: false, id: "" };
  },
  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  componentDidMount: function() {
    helpers.getSavedData().then(
      function(response) {
        console.log(response);
        if (response !== this.state.savedResults) {
          this.setState({ savedResults: response.data });
          console.log(this.state.savedResults);
        }
      }.bind(this)
    );
  },

   componentDidUpdate: function() {
    if(this.state.id !== "") {

      helpers.unsaveData(this.state.id).then(function() {
        this.setState({id: ""})

        helpers.getSavedData().then(
            function(response) {
              // console.log(response);
              if (response !== this.state.results) {
                // console.log("History", response.data);
                this.setState({ savedResults: response.data });
              }
            }.bind(this)
          );

      }.bind(this));
    } 
   },

  usetId: function(id) {
    this.setState({id: id}, () => {console.log(this.state.id)})
  },

  render: function() {
    return (
        <div>
        <Nav />


      <div className="container">
        <div className="col-md-8 col-md-offset-2">
        {this.state.savedResults.map((result, i) => {
          return (
            <div key={i} className="test">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="col-md-2">
                    <p>Upvotes: {result.upvote}</p>

                  </div>
                  <div className="col-md-3">
                    <img width="80%" src={result.image} alt="" />
                  </div>
                  <div className="col-md-5 title-alignment">
                    <div className="row title-alignment" />
                    <div className="row"><p>{result.title}</p></div>
                    <div className="row" />
                  </div>
                  <div className="col-md-2">

                    <div className="row btn-row">
                      <div className="col-md-12">
                        <button className="btn btn-default result-btn">
                          <a href={result.link} target="_blank">Visit Page</a>
                        </button>
                      </div>
                    </div>
                    <div className="row btn-row">
                      <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                          <input
                            type="hidden"
                            name="save"
                            value={result._id}
                            ref={input => {
                              this.saveInput = input;
                            }}
                          />
                        </form>
                         <Button onClick={this.open} className="btn btn-default result-btn">
                            Add a note
                        </Button>

                          <Modal show={this.state.showModal} onHide={this.close}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{result.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.close}>Close</Button>
                                </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <SaveUnsaveButton name="Unsave" id={result._id} saveId={this.usetId}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
      </div>
    );
  }
});

module.exports = Saved;


