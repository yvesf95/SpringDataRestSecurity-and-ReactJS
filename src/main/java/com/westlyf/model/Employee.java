package com.westlyf.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Yves on 1/19/2017.
 */

@Data
@Entity
@Table(name = "EMPLOYEES")
public class Employee {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "FIRST_NAME", length = 30, nullable = false)
    private String firstName;

    @Column(name = "LAST_NAME", length = 30, nullable = false)
    private String lastName;

    @Column(name = "DESCRIPTION", length = 100, nullable = false)
    private String description;

    public Employee() {
    }

    public Employee(String firstName, String lastName, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
    }
}
