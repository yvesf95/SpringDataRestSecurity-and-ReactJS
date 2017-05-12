import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class Employee extends React.Component{

    componentDidMount(){
        this.props.loadFromServer(this.props.query);
    }
    
    render(){
        return(
            <Grid fluid>
                <Row>
                    <Col>
                        <h1>Employees</h1>
                    </Col>
                </Row>
            </Grid>
        );
    }
}