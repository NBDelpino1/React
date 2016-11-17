// Include React and React-Router dependencies
var React = require('react');

// Query Component Declaration
var Query = React.createClass({

    // Here we set initial variables for the component to be blanks
    getInitialState: function(){
        return {
            search: "",
            start: "",
            end: "",
        }
    },

    // Whenever we detect ANY change in the textbox, we register it.
    handleChange: function(event) {
        console.log("TEXT CHANGED");

        // Here we create syntax to capture any change in text to the query terms (pre-search).
        // See this Stack Overflow answer for more details:
        // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    /*This code handles the sending of the search terms to the parent Search component*/
    handleSubmit: function(){
        console.log("CLICKED");
        this.props.updateSearch(this.state.search, this.state.start, this.state.end);
        return false;
    },

    // Here we render the Query component
    render: function(){

        return(
            <div className ="main-container">

                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6><span aria-hidden="true" class="glyphicon glyphicon-list"></span> Search Parameters</h6>
                            </div>
                            <div className="panel-body" id="panelA">
                               <form>
                                   <div className="form-group">
                                       <h6>Topic</h6>
                                       <input type="text" value={this.state.value} className="form-control " id="topic" onChange= {this.handleChange} required/>

                                       <h6><strong>Start Year</strong></h6>
                                       <input type="number" value={this.state.value} className="form-control " id="start_year" onChange= {this.handleChange} required/>

                                       <h6><strong>End Year</strong></h6>
                                       <input type="number" value={this.state.value} className="form-control " id="end_year" onChange= {this.handleChange} required/>

                                   </div>
                                    <div className="text-center">
                                        <button className="btn btn-default btn-lg" id="search" type="button" onClick={this.handleSubmit}><span aria-hidden="true" className="glyphicon glyphicon-search"></span> Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

});

// Export the module back to the route
module.exports = Query;