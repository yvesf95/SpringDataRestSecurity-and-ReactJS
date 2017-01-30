package com.westlyf.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Yves on 1/7/2017.
 */

@Data
@Entity
@Table(name = "ROLE")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ROLE_NAME")
    private String roleName;

    public Role() {
    }

    public Role(String roleName) {
        this.roleName = roleName;
    }
}
