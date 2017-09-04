var React = require("react");
var createReactClass = require('create-react-class');

var OpenModal = createReactClass({

    handleSubmit: function(event) {
       event.preventDefault();

       this.props.getId(this.saveInput.value)

    },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="hidden" name="save" value={this.props.id} 
                ref={(input) => { this.saveInput = input }} />
                <button className="btn btn-default result-btn">{this.props.name}</button>
            </form>
        )
    }
})


module.exports = OpenModal;

