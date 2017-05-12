import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class DeleteDialog extends React.Component{

    constructor(){
        super();
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    closeDialog(){
        
        this.props.closeDeleteDialog();
    }

    handleDelete(){
        this.props.onDelete(this.props.selectedEntities);
        this.props.closeDeleteDialog();
    }

    render(){
        const selectedEntities = this.props.selectedEntities.map((entity, i) => {
            <div>{entity.customerName}</div>
        });
        
        return(
            <div className="modal-container">
                <Modal show={this.props.showDeleteDialog} onHide={this.closeDialog} container={this}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete this?</p>
                        <div>{selectedEntities}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
                        <Button type="button" bsStyle="primary" onClick={this.closeDialog}>Abort</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
