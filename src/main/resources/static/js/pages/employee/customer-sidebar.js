import React from 'react';

export default class CustomerSidebar extends React.Component{
    
    constructor(props){
        super(props);
        this.closeSidebar = this.closeSidebar.bind(this);
    }
    
    closeSidebar(){
        this.props.toggleSidebarRight();
    }
    
    render(){

        const resizeClass = {
            resize: "vertical"
        };

        return(
            <div id="sidebar-wrapper-right">
                <form role="form" className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-8">
                            <h4><span className="glyphicon glyphicon-plus"/> Add New Customer</h4>
                        </div>
                        <div className="col-sm-4">
                            <button type="button" className="btn btn-danger pull-right">
                                Reset <span className="glyphicon glyphicon-refresh"/>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label htmlFor="customerName" className="col-sm-3 control-label">Customer Name:</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control"
                                   name="customerName" id="customerName" placeholder="John"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="remark" className="col-sm-3 control-label">Remark:</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" rows="3" style={resizeClass}
                                      name="remark" id="remark" placeholder="Insert Text Here..."/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location" className="col-sm-3 control-label">Location:</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control"
                                   name="location" id="location" placeholder="Manila"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="locationCode" className="col-sm-3 control-label">Location Code:</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control"
                                   name="locationCode" id="locationCode" placeholder="1234"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="locationCode" className="col-sm-3 control-label">Credit Limit:</label>
                        <div className="col-sm-9">
                            <input type="number" className="form-control"
                                   name="locationCode" id="locationCode" placeholder="100000.00"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="totalDebt" className="col-sm-3 control-label">Total Debt:</label>
                        <div className="col-sm-9">
                            <input type="number" className="form-control"
                                   name="totalDebt" id="totalDebt" placeholder="9999.99"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate" className="col-sm-3 control-label">Due Date:</label>
                        <div className="col-sm-9">
                            <input type="date" className="form-control"
                                   name="dueDate" id="dueDate"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tinNumber" className="col-sm-3 control-label">Tin Number:</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control"
                                   name="tinNumber" id="tinNumber" placeholder="0987654321"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <div className="col-sm-offset-5 col-sm-3">
                            <button type="button" className="btn btn-primary pull-right">
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