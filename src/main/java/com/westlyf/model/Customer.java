package com.westlyf.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.util.Date;

/**
 * Created by Yves on 1/20/2017.
 */

@Data
@Entity
@Table(name = "CUSTOMER")
public class Customer {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CUSTOMER_ID")
    private int customerId;

    @Pattern(regexp = "([a-zA-Z]*(\\s?[a-zA-Z]+))*")
    @Column(name = "CUSTOMER_NAME", length = 30, unique = true, nullable = false)
    private String customerName;

    @Column(name = "REMARK", length = 50)
    private String remark;

    @Column(name = "LOCATION", length = 30, nullable = false)
    private String location;

    @Column(name = "LOCATION_CODE", length = 30, unique = true, nullable = false)
    private String locationCode;

    @Pattern(regexp = "([0-9]+(\\.?[0-9]+)?)*")
    @Column(name = "CREDIT_LIMIT")
    private double creditLimit;

    @Pattern(regexp = "([0-9]+(\\.?[0-9]+)?)*")
    @Column(name = "TOTAL_DEBT")
    private double totalDebt;

    @Column(name = "DUE_DATE")
    private Date dueDate;

    @Column(name = "TIN_NUMBER")
    private String tinNumber;

    public Customer() {
    }

    public Customer(String customerName, String remark,
                    String location, String locationCode,
                    double creditLimit, double totalDebt,
                    Date dueDate, String tinNumber) {
        this.customerName = customerName;
        this.remark = remark;
        this.location = location;
        this.locationCode = locationCode;
        this.creditLimit = creditLimit;
        this.totalDebt = totalDebt;
        this.dueDate = dueDate;
        this.tinNumber = tinNumber;
    }
}
