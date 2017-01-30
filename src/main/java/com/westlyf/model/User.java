package com.westlyf.model;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.util.Date;
import java.util.Set;

/**
 * Created by Yves on 1/7/2017.
 */

@Data
@Entity
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Pattern(regexp = "[a-zA-Z0-9]{4,}")
    @Column(name = "USERNAME", length = 30, unique = true, nullable = false)
    private String username;

    @Pattern(regexp = "[a-zA-Z0-9]{4,}")
    @Column(name = "PASSWORD", length = 100, nullable = false)
    private String password;

    @Pattern(regexp = "([a-zA-Z]*(\\s?[a-zA-Z]+))*")
    @Column(name = "NAME", length = 30, nullable = false)
    private String name;

    @Pattern(regexp = "((([\\w]+(\\.?[\\w]+)*)+)@(?:([\\w]+\\.)+)([a-zA-Z]{2,4}))*")
    @Column(name = "EMAIL", length = 100)
    private String email;

    @Column(name = "STATUS")
    private String status;

    @CreatedDate
    @Column(name = "CREATED_ON")
    private Date createdOn;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "USER_ROLES",
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "ROLE_ID"))
    private Set<Role> roles;

    public User() {
    }

    public User(String username, String password, String name,
                String email, String status, Date createdOn, Set<Role> roles) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.status = status;
        this.createdOn = createdOn;
        this.roles = roles;
    }
}
