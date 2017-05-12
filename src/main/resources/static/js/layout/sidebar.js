import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Sidebar extends React.Component{

    render(){
        return(
            <div id="sidebar-wrapper">
                <Nav stacked>
                    <NavItem eventKey={1} disabled>
                        <div>
                            <img src="images/user-avatar.png" width="100" height="100"
                                 className="img-responsive img-circle center-block"/>
                            <hr/>
                        </div>
                    </NavItem>
                    <LinkContainer to="/">
                        <NavItem eventKey={2}>
                            <span className="glyphicon glyphicon-home"/> Home
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/clients">
                        <NavItem eventKey={3}>
                            <span className="glyphicon glyphicon-globe"/> Customer
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/suppliers">
                        <NavItem eventKey={4}>
                            <span className="glyphicon glyphicon-import"/> Suppliers
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/employees">
                        <NavItem eventKey={5}>
                            <span className="glyphicon glyphicon-user"/> Employees
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/transactions">
                        <NavItem eventKey={6}>
                            <span className="glyphicon glyphicon-transfer"/> Transactions
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/reports">
                        <NavItem eventKey={7}>
                            <span className="glyphicon glyphicon-check"/> Reports
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/taxes">
                        <NavItem eventKey={8}>
                            <span className="glyphicon glyphicon-barcode"/> Taxes
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </div>
        );
    }
}