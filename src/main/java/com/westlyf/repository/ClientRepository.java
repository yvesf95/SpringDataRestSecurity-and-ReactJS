package com.westlyf.repository;

import com.westlyf.model.Client;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

/**
 * Created by Admin on 1/31/2017.
 */
public interface ClientRepository extends PagingAndSortingRepository<Client, Integer> {

    @RestResource(path = "clients", rel = "clients")
    List<Client> findByClientName(@Param(value = "clientName") String clientName);

}
