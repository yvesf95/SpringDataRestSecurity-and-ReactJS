import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Modal } from 'react-bootstrap';

export default class CreateDialog extends React.Component{

    constructor(){
        super();
        this.closeDialog = this.closeDialog.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    closeDialog(){
        this.props.closeCreateDialog();
    }

    handleSubmit(){
        let entity = {};
        this.props.attributes.forEach(attribute => {
            entity[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value;
        });
        console.log(entity);
        this.props.onCreate(entity);
        this.props.closeCreateDialog();
    }

    render(){
        const names = this.props.names;
        const inputs = this.props.attributes.map((attr) =>
            <FormGroup key={attr} controlId={attr}>
                <Col componentClass={ControlLabel} sm={3}>{names[attr]}</Col>
                <Col sm={9}>
                    <FormControl type={attr.match(/date/i) ? "date" : "text"}
                                 ref={attr} placeholder={names[attr]} />
                </Col>
            </FormGroup>
        );
        
        return(
            <div className="modal-container">
                <Modal show={this.props.showCreateDialog} onHide={this.closeDialog} container={this}>
                    <Form horizontal>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Please fill out all the fields marked with *.</p>
                            {inputs}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" bsStyle="success" onClick={this.handleSubmit}>Save</Button>
                            <Button type="reset" bsStyle="danger">Reset</Button>
                            <Button type="button" bsStyle="warning" onClick={this.closeDialog}>Cancel</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}
