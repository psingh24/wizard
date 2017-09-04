var React = require("react");
var createReactClass = require('create-react-class');

var SaveUnsaveButton = createReactClass({

    handleSubmit: function(event) {
       event.preventDefault();

       if (this.props.name === "Unsave" || this.props.name === "Save") {
            this.props.saveId(this.saveInput.value)
       } else if (this.props.name === "X")
       { this.props.saveNoteId(this.saveInput.value)}
     
    },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="hidden" name="save" value={this.props.id} 
                ref={(input) => { this.saveInput = input }} />
                <button className="btn btn-danger result-btn">{this.props.name}</button>
            </form>
        )
    }
})


module.exports = SaveUnsaveButton;

