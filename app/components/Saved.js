var React = require("react");
var createReactClass = require('create-react-class');

var Saved = createReactClass({
  render: function() {
    return (

     <div className="col-md-10 col-md-offset-1 test">
        <div className="panel panel-default">
             <div className="panel-body">
                 <div className="col-md-2">
                     <p>Upvotes: </p>
                    
                 </div>
                 <div className="col-md-3">
                     <img width="80%" src="" alt=""/>
                </div>
                 <div className="col-md-5 title-alignment">
                    <div className="row title-alignment"></div>
                     <div className="row"><p></p></div>
                      <div className="row"></div>
                 </div>
                 <div className="col-md-2">

                     <div className="row btn-row">
                        <div className="col-md-12">
                            <button className="btn btn-default result-btn"><a href="{{this.link}}" target="_blank">Visit Page</a></button>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-12 btn-row">
                             <button type="button" className="btn btn-default" data-toggle="modal" data-target="#{{this.id}}">Add a Note</button>

                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-12 btn-row">
                             <form action="/unsave/{{this.id}}" method="POST">
                                <button className="btn btn-default">Unsave</button>
                            </form>

                        </div>
                     </div>
                      

                       
                 </div>
             </div>
        </div>
    </div>

    );
  }
});

module.exports = Saved;
