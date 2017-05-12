import React from 'react';

export default class CustomerSidebar extends React.Component{
    
    constructor(props){
        super(props);
        this.closeSidebar = this.closeSidebar.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    closeSidebar(){
        this.props.toggleSidebarRight();
    }

    handleSubmit(){
        let customer = {};
        this.props.attributes.forEach(attribute => {
            customer[attribute] = this.refs[attribute].value;
        });
        this.props.onCreate(customer);
    }

    render(){
        const resizeClass = {
            resize: "vertical"
        };

        const names = this.props.names;
        const inputs = this.props.attributes.map((attr, i) =>
            <div key={i} className="form-group">
                <label htmlFor={attr} className="col-sm-3 control-label">{names[i]}:</label>
                <div className="col-sm-9">
                    <input type={attr.match(/date/i) ? "date" : "text"} 
                           className="form-control" ref={attr} id={attr} required />
                </div>
            </div>
        );
        return(
            <div id="sidebar-wrapper-right">
                <form role="form" className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-8">
                            <h4><span className="glyphicon glyphicon-plus"/> Add New Customer</h4>
                        </div>
                        <div className="col-sm-4">
                            <button type="reset" className="btn btn-danger pull-right">
                                Reset <span className="glyphicon glyphicon-refresh"/>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    {inputs}
                    <hr/>
                    <div className="form-group">
                        <div className="col-sm-offset-5 col-sm-3">
                            <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>
                                Save <span className="glyphicon glyphicon-ok"/>
                            </button>
                        </div>
                        <div className="col-sm-4">
                            <button type="button" className="btn btn-warning pull-right" onClick={this.closeSidebar}>
                                Cancel <span className="glyphicon glyphicon-remove"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}