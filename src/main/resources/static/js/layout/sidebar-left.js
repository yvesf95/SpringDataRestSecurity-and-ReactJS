import React from 'react';
import { Link } from 'react-router';

export default class SidebarLeft extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.toggleSidebarLeft(!this.props.toggleLeft);
    }
    
    render(){
        return(
            <div id="sidebar-wrapper-left">
                <ul className="sidebar-nav">
                    <li>
                        <a href="#" className="sidebar-toggle" onClick={this.handleClick}>
                            <span className="glyphicon glyphicon-menu-hamburger"/> Yves Rupert Francisco
                        </a>
                    </li>
                    <li>
                        <div className="sidebar-header">
                            <img src="images/user-avatar.png" width="100" height="100"
                                 className="img-responsive img-circle center-block"/>
                            <hr/>
                        </div>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active">
                            <span className="glyphicon glyphicon-home"/> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard" activeClassName="active">
                            <span className="glyphicon glyphicon-dashboard"/> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="customers" activeClassName="active">
                            <span className="glyphicon glyphicon-globe"/> Customer
                        </Link>
                    </li>
                </ul>
            </div>

        );
    }
}