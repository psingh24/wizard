var React = require("react");
var createReactClass = require("create-react-class");
import { Modal, Button, FormControl } from "react-bootstrap";

var SaveUnsaveButton = require("./SaveUnsaveButton");

var helpers = require("../utlis/helpers");
var Nav = require("./Nav");

var Saved = createReactClass({
  getInitialState: function() {
    return { savedResults: [], showModal: false, id: "", activeModal: null, note: '', value: '', saveNote: "false", unSave: "false", noteId: '', deleteNote: "false" };
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


    if (this.state.unSave === "true" ) {

      helpers.unsaveData(this.state.id).then(
        function() {
          this.setState({ unSave: "false" });

          helpers.getSavedData().then(
            function(response) {
              // console.log(response);
              if (response !== this.state.results) {
                // console.log("History", response.data);
                this.setState({ savedResults: response.data });
              }
            }.bind(this)
          );
        }.bind(this)
      );
}
    else if(this.state.saveNote === "true") {
      helpers.postNote(this.state.id, this.state.note).then(function(response) {
        this.myInput.value= "";
        this.setState({saveNote: "false"})
        helpers.getSavedData().then(
            function(response) {
              
              // console.log(response);
              if (response !== this.state.results) {
                // console.log("History", response.data);
                this.setState({ savedResults: response.data});
              }
            }.bind(this)
          );
        
     

      }.bind(this))
    } 
    else if(this.state.deleteNote === "true") {
      helpers.deleteNote(this.state.noteId).then(function(response) {
        this.setState({deleteNote: "false"})
         helpers.getSavedData().then(
            function(response) {
              
              // console.log(response);
              if (response !== this.state.results) {
                // console.log("History", response.data);
                this.setState({ savedResults: response.data});
              }
            }.bind(this)
          );
      }.bind(this))
    }
  },

  usetId: function(id) {
    this.setState({ id: id, unSave: "true" }, () => {
      console.log(this.state.id);
    });
  },

  clickHandler: function(e, index) {
    this.setState({ activeModal: index });
  },

  hideModal: function() {
    this.setState({ activeModal: null });
  },

  handleSubmit: function(event) {
    this.setState({note: this.myInput.value, id: this.idInput.value, saveNote: "true"}, () => {console.log(this.state.note, this.state.id)});
  },

  saveNoteId: function(id) {
    this.setState({noteId: id, deleteNote: "true"}, () => {console.log(this.state.noteId)})
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
                              <a href={result.link} target="_blank">
                                Visit Page
                              </a>
                            </button>
                          </div>
                        </div>
                        <div className="row btn-row">
                          <div className="col-md-12">
                          
                            <Button
                              id={i}
                              
                              onClick={e => this.clickHandler(e, result._id)}
                              className="btn btn-default result-btn"
                            >
                              Add a note
                            </Button>

                            <Modal
                              id={i}
                              show={this.state.activeModal === result._id}
                              onHide={this.hideModal}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>{result.title}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>{result.note.map((note, i) =>{
                               return ( <div key={i} className="row">
                                <div className="col-md-12">
                                <SaveUnsaveButton name="X" id={note._id} saveNoteId={this.saveNoteId}/>
                                <p>{note.body}</p>
                               
                                <hr/>
                                </div>
                                </div>)

                              })}</Modal.Body>  
                              <Modal.Footer>
                              
                                <FormControl
                                  inputRef={ref => { this.myInput = ref; }}
          
                                  type="text"
                                  ref="note"
                                  placeholder="Enter text"
                                />  <input type="hidden" name="save" value={result._id} 
                                  ref={(input) => { this.idInput = input }} />

                                  <div className="row">
                                  <div className="col-md-12 save-btn">
                                  <Button onClick={this.handleSubmit}>Save Note</Button>
                                 
                                <Button onClick={this.hideModal}>Close</Button>
                                </div>
                                </div>
                               
                              </Modal.Footer>
                            </Modal>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <SaveUnsaveButton
                              name="Unsave"
                              id={result._id}
                              saveId={this.usetId}
                            />
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


// <button className="btn btn-danger noteDelete" onClick={this.deleteNote} >X</button>

//  <input type="hidden" name="save" value={note._id} 
                                  // ref={(input) => { this.noteId = input }} />