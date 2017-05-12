import React from 'react';
import { Alert, Button, DropdownButton, FormControl, 
    FormGroup, InputGroup, MenuItem, Navbar} from 'react-bootstrap';

import CustomerTable from './customer-table';

export default class Customer extends React.Component{

    constructor(){
        super();
        this.openModal = this.openModal.bind(this);
    }
    
    componentDidMount(){
        this.props.loadFromServer(this.props.query);
    }

    openModal(){
        this.props.openCreateDialog();
    }

    render(){
        const table = (typeof this.props.entities === 'undefined' || this.props.entities.length <= 0) ? (
            <Alert bsStyle="danger">
                <h4 className="text-center">
                    <span className="fa fa-exclamation-triangle"/> No data available
                </h4>
            </Alert>
        ) : (
            <CustomerTable entities={this.props.entities}
                           attributes={this.props.attributes}
                           names={this.props.names} 
                           links={this.props.links}
                           pageNumber={this.props.pageNumber}
                           pageSize={this.props.pageSize}
                           totalPages={this.props.totalPages}
                           onSelect={this.props.onSelect}
                           onDeselect={this.props.onDeselect} 
                           loadFromServer={this.props.loadFromServer}
                           openDeleteDialog={this.props.openDeleteDialog} 
            />
        );
        
        return(
            <div>
                <Navbar staticTop fluid>
                    <Navbar.Header>
                        <Navbar.Brand>Clients</Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <InputGroup>
                                <DropdownButton componentClass={InputGroup.Button}
                                                title="All" id="basic-nav-dropdown">
                                    <MenuItem key="1">Item</MenuItem>
                                </DropdownButton>
                                <FormControl type="text" placeholder="Search"/>
                            </InputGroup>
                        </FormGroup>
                        {' '}
                        <Button bsStyle="success" onClick={this.openModal}>
                            <span className="glyphicon glyphicon-plus-sign"/> Add Client
                        </Button>
                    </Navbar.Form>
                </Navbar>
                {table}
            </div>
        );
    }
}