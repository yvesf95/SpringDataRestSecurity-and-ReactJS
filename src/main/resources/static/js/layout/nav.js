import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component{

    constructor(){
        super();
        this.state = {
            collapsed: true
        };
    }

    collapseNav(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render(){
        const collapsedClass = this.state.collapsed ? "collapse" : "";
        const navClass = this.props.location.pathname === "/login" ? "navbar-static-top" : "navbar-fixed-top";

        return (
            <nav className={"navbar navbar-default " + navClass}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onClick={this.collapseNav.bind(this)}>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a href="#" className="navbar-brand">Spring + ReactJS</a>
                    </div>
                    <div className={"navbar-collapse " + collapsedClass} id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">
                                    <span className="glyphicon glyphicon-envelope"/> 
                                    <span className="badge">3</span>
                                </a>
                            </li>
                            <li><a href="#"><span className="glyphicon glyphicon-user"/> My Profile</a></li>
                            <li>
                                <Link to="/login" activeClassName="active">
                                    <span className="glyphicon glyphicon-off"/> Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}