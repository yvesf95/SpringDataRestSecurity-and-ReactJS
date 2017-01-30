import React from 'react';

export default class CustomerRow extends React.Component{

    render(){
        const customer = this.props.customer;

        return(
            <tr>
                <td>{customer.id}</td>
                <td>{customer.customerName}</td>
                <td>{customer.location}</td>
                <td>{customer.locationCode}</td>
                <td>{customer.creditLimit}</td>
                <td>{customer.totalDebt}</td>
                <td>{customer.dueDate}</td>
                <td>{customer.tinNumber}</td>
                <td><span className="glyphicon glyphicon-trash"/></td>
            </tr>
        );
    }
}