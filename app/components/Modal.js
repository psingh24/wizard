var React = require("react");
var createReactClass = require('create-react-class');
import { Modal, Button } from 'react-bootstrap'
var SaveUnsaveButton = createReactClass({
    

    handleSubmit: function(event) {
       event.preventDefault();

       this.props.saveId(this.saveInput.value)

    },

    render: function() {
        return (
             <Modal show={this.props.show} onHide={this.props.onHide}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.close}>Close</Button>
                                </Modal.Footer>
                        </Modal>
        )
    }
})


module.exports = SaveUnsaveButton;

