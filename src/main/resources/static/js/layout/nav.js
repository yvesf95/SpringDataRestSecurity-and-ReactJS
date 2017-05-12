import React from 'react';
import { Link } from 'react-router';
import { Button, DropdownButton, FormGroup, FormControl, InputGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class MyNavbar extends React.Component{

    constructor(){
        super();
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e) {
        e.preventDefault();
        this.props.toggleSidebar();
    }

    render(){
        return(
            <Navbar collapseOnSelect inverse fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" onClick={this.handleToggle} 
                           style={{'padding': '15px 20px'}}>
                            <i className="fa fa-bars icon" aria-hidden="true"/>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to="/" style={{marginLeft: '0'}}>
                            <span className="glyphicon glyphicon-globe"/> Globe Auto Supply
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <InputGroup>
                                <DropdownButton componentClass={InputGroup.Button} 
                                                title="All" id="basic-nav-dropdown">
                                    <MenuItem key="1">Item</MenuItem>
                                </DropdownButton>
                                <FormControl type="text" placeholder="Search"/>
                                <InputGroup.Button>
                                    <Button bsStyle="primary"><span className="glyphicon glyphicon-search"/></Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Navbar.Form>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <span className="glyphicon glyphicon-envelope"/>
                            <span className="badge">3</span>
                        </NavItem>
                        <NavDropdown eventKey={2} title="My Profile" id="basic-nav-dropdown">
                            <LinkContainer to="/login">
                                <MenuItem eventKey={2.1}>
                                        <span className="glyphicon glyphicon-off"/> Logout
                                </MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}