package com.westlyf.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.util.Date;

/**
 * Created by Yves on 1/20/2017.
 */

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "CLIENT")
public class Client {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "CUSTOMER_ID")
    private int customerId;

    @NotEmpty
    @Pattern(regexp = "([a-zA-Z]*(\\s?[a-zA-Z]+))*")
//    @Column(name = "CLIENT_NAME", length = 30, unique = true, nullable = false)
    private String clientName;

//    @Column(name = "REMARK")
    private String remark;

//    @Column(name = "LOCATION", length = 70, nullable = false)
    private String location;

//    @Column(name = "LOCATION_CODE", length = 30, unique = true, nullable = false)
    private String locationCode;

//    @Pattern(regexp = "([0-9]+(\\.?[0-9]+)?)*")
//    @Column(name = "CREDIT_LIMIT")
    private float creditLimit;

//    @Pattern(regexp = "([0-9]+(\\.?[0-9]+)?)*")
//    @Column(name = "CREDIT")
    private float credit;

//    @Column(name = "TIN_NUMBER")
    private String tinNumber;

    @CreatedDate
//    @JsonIgnore
    @Temporal(TemporalType.TIMESTAMP)
//    @Column(name = "CREATED")
    private Date created;

    @Version
    @JsonIgnore
    private Long version;

    public Client() {
    }

    public Client(String clientName, String remark,
                  String location, String locationCode,
                  float creditLimit, float credit, String tinNumber) {
        this.clientName = clientName;
        this.remark = remark;
        this.location = location;
        this.locationCode = locationCode;
        this.creditLimit = creditLimit;
        this.credit = credit;
        this.tinNumber = tinNumber;
    }
}
