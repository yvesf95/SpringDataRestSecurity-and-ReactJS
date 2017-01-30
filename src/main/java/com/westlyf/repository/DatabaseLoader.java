package com.westlyf.repository;

import com.westlyf.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by Yves on 1/19/2017.
 */

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public DatabaseLoader(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.employeeRepository.save(new Employee("Yves", "Francisco", "Programmer"));
        this.employeeRepository.save(new Employee("Yves", "Francisco", "Programmer"));
        this.employeeRepository.save(new Employee("Yves", "Francisco", "Programmer"));
    }
}
