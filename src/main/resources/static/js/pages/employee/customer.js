import React from 'react';
import CustomerSidebar from './customer-sidebar';
import CustomerTable from './customer-table';

export default class Customer extends React.Component{

    constructor(){
        super();
        this.state = {
            toggleRight: false
        };
        this.toggleSidebarRight = this.toggleSidebarRight.bind(this);
    }

    toggleSidebarRight() {
        let toggleRight = !this.state.toggleRight;
        this.setState({toggleRight});
    }
  
    render(){
        const toggleClass = this.state.toggleRight ? "toggle-right" : "";
        const containerStyle = {
            padding: "15px"
        };

        return(
            <div id="content-wrapper" className={toggleClass}>
                <CustomerSidebar toggleRight={this.state.toggleRight} 
                                 toggleSidebarRight={this.toggleSidebarRight} />
                <div className="container-fluid" style={containerStyle}>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Welcome to Customers page.</h2>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-7">
                                <form>
                                    <div className="form-group has-feedback">
                                        <label htmlFor="search" className="sr-only">Search</label>
                                        <div className="input-group">
                                            <input type="text" id="search" className="form-control"
                                                   name="search" placeholder="Search from Customers"/>
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-primary">
                                                    <span className="glyphicon glyphicon-search"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5">
                                <button type="button" className="btn btn-success pull-right" onClick={this.toggleSidebarRight}>
                                    <span className="glyphicon glyphicon-plus"/> Add New Customer
                                </button>
                            </div>
                        </div>
                    </div>
                    <CustomerTable />
                    <CustomerTable />
                </div>
            </div>
        );
    }
}