import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, Col, DropdownButton, InputGroup, FormControl, 
    Grid, MenuItem, Pagination, Row, Table } from 'react-bootstrap';

import CustomerRow from './customer-row';

export default class CustomerTable extends React.Component{

    constructor(){
        super();
        this.state = { isChecked: false };
        this.handleSelect = this.handleSelect.bind(this);
        this.handlePageNav = this.handlePageNav.bind(this);
    }

    handleSelect(eventKey){
        console.log(eventKey);
        this.props.loadFromServer({ size: eventKey });
    }

    handlePageNav(eventKey){
        const activePage = eventKey-1;
        if (this.props.pageNumber !== activePage){
            this.props.loadFromServer({ page: activePage, size: this.props.pageSize });
        }
    }

    render(){
        const tableBody = this.props.entities.map((entity) =>
            <CustomerRow key={entity._links.self.href}
                         entity={entity}
                         attributes={this.props.attributes}
                         onSelect={this.props.onSelect}
                         onDeselect={this.props.onDeselect}
                         openDeleteDialog={this.props.openDeleteDialog}
            />
        );

        const names = this.props.names;
        const attr = this.props.attributes;
        const tableHead = attr.map((attr) => <th>{names[attr]}</th>);


        return(
            <Grid fluid>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <DropdownButton title={"Show " + this.props.pageSize} id="basic-nav-dropdown"
                                        onSelect={this.handleSelect}>
                            <MenuItem key="1" eventKey={10}>Show 10</MenuItem>
                            <MenuItem key="2" eventKey={20}>Show 20</MenuItem>
                            <MenuItem key="3" eventKey={30}>Show 30</MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col lg={6} md={6} sm={6}  xs={6}>
                        <Pagination prev next boundaryLinks
                                    activePage={this.props.pageNumber+1}
                                    onSelect={this.handlePageNav}
                                    items={this.props.totalPages}
                                    maxButtons={5}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table hover responsive >
                            <thead>
                            <tr>
                                <th>
                                    <Checkbox checked={this.state.isChecked}/>
                                </th>
                                {tableHead}
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>{tableBody}</tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        );
    }
}