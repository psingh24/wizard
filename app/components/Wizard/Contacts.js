var React = require("react");
var createReactClass = require("create-react-class");

var Link = require("react-router").Link;



var Contacts = createReactClass({
  render: function() {
    return (
     <div>Contacts

         <div className="row">
             <div className="col-md-4">Name</div>
             <div className="col-md-4">Email</div>
             <div className="col-md-4">Relationship</div>
         </div>
         <div className="row">
             <div className="col-md-4">Phone</div>
             <div className="col-md-4">Preferred Contact Method</div>
         </div>
         <div className="row">
             <div className="col-md-4">Physical Street Address</div>
             <div className="col-md-4">City</div>
             <div className="col-md-4">State</div>
             <div className="col-md-4">Zip Code</div>
         </div>
     </div>
     
        
    );
  }
});

module.exports = Contacts;
