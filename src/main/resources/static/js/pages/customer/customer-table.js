import React from 'react';

import CustomerRow from './customer-row';

export default class CustomerTable extends React.Component{

    constructor(){
        super();
    }

    componentDidMount(){
        
    }

    render(){
        const customers = [
            {id: '1',
                customerName: 'Yves Rupert Francisco',
                location: '1341 E. Quintos Street Sampaloc Manila',
                locationCode: '1231',
                creditLimit: '200000.00',
                totalDebt: '10000.00',
                dueDate: '1/29/2017',
                tinNumber: '1234567890'
            },{id: '1',
                customerName: 'Yves Rupert Francisco',
                location: '1341 E. Quintos Street Sampaloc Manila',
                locationCode: '1231',
                creditLimit: '200000.00',
                totalDebt: '10000.00',
                dueDate: '1/29/2017',
                tinNumber: '1234567890'
            },{id: '1',
                customerName: 'Yves Rupert Francisco',
                location: '1341 E. Quintos Street Sampaloc Manila',
                locationCode: '1231',
                creditLimit: '200000.00',
                totalDebt: '10000.00',
                dueDate: '1/29/2017',
                tinNumber: '1234567890'
            },{id: '1',
                customerName: 'Yves Rupert Francisco',
                location: '1341 E. Quintos Street Sampaloc Manila',
                locationCode: '1231',
                creditLimit: '200000.00',
                totalDebt: '10000.00',
                dueDate: '1/29/2017',
                tinNumber: '1234567890'
            },{id: '1',
                customerName: 'Yves Rupert Francisco',
                location: '1341 E. Quintos Street Sampaloc Manila',
                locationCode: '1231',
                creditLimit: '200000.00',
                totalDebt: '10000.00',
                dueDate: '1/29/2017',
                tinNumber: '1234567890'
            },{id: '1',
                customerName: 'Yves Rupert Francisco',
                location: '1341 E. Quintos Street Sampaloc Manila',
                locationCode: '1231',
                creditLimit: '200000.00',
                totalDebt: '10000.00',
                dueDate: '1/29/2017',
                tinNumber: '1234567890'
            },{id: '1',
                customerName: 'Yves Rupert Francisco',
                location: '1341 E. Quintos Street Sampaloc Manila',
                locationCode: '1231',
                creditLimit: '200000.00',
                totalDebt: '10000.00',
                dueDate: '1/29/2017',
                tinNumber: '1234567890'
            }
        ].map((customer, i) => <CustomerRow key={i} customer={customer} />);

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                <th>Location</th>
                                <th>Location Code</th>
                                <th>Credit Limit</th>
                                <th>Total Debt</th>
                                <th>Due Date</th>
                                <th>Tin Number</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                                {customers}
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="pagination pull-right">
                            <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}