import React from 'react';
import CreateDialog from '../../layout/create-dialog';
import { Modal, Button, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

export default class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            showModal: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({ showModal: true })
    }

    closeModal(){
        this.setState({ showModal: false })
    }

    render(){
        return(
            <div className="modal-container">
                <div className="container-fluid">
                    <div className="row">
                        <h1>Welcome to Home page.</h1>
                        <div className="col-md-6">
                            <Button bsStyle="primary" bsSize="large" onClick={this.openModal}>
                                Launch contained modal
                            </Button>
                            <Modal show={this.state.showModal} onHide={this.closeModal} container={this}>
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam,
                                    beatae, rem fuga id earum? Inventore et facilis obcaecati.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.closeModal}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}