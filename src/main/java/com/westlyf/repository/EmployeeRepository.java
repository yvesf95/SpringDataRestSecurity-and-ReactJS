package com.westlyf.repository;

import com.westlyf.model.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Yves on 1/19/2017.
 */
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Integer> {
}
