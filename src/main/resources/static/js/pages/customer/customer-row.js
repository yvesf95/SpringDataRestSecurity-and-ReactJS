import React from 'react';
import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap';

export default class CustomerRow extends React.Component{

    constructor(){
        super();
        this.state = { isChecked: false };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSelect(){
        const isChecked = !this.state.isChecked;
        this.setState({ isChecked });
        if (isChecked){
            this.props.onSelect(this.props.entity);
        } else {
            this.props.onDeselect(this.props.entity);
        }
    }

    handleDelete(){
        this.props.onSelect(this.props.entity);
        this.props.openDeleteDialog();
    }
    
    render(){
        const entity = this.props.entity;
        const attr = this.props.attributes;
        
        const data = attr.map((a) => 
            <td>{entity[a]}</td>
        );

        return(
            <tr>
                <td onClick={this.handleSelect}>
                    <Checkbox checked={this.state.isChecked}
                              onClick={this.handleSelect} />
                </td>
                {data}
                <td>
                    <DropdownButton bsStyle="info" title="Action" pullRight id="dropdown-button" >
                        <MenuItem key="1">
                            <span className="glyphicon glyphicon-certificate" /> Make Order
                        </MenuItem>
                        <MenuItem key="2" onClick={this.handleDelete}>
                            <span className="glyphicon glyphicon-edit" /> Update
                        </MenuItem>
                        <MenuItem key="3" onClick={this.handleDelete}>
                            <span className="glyphicon glyphicon-trash" /> Delete
                        </MenuItem>
                    </DropdownButton>
                </td>
            </tr>
        );
    }
}