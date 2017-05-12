package com.westlyf.repository;

import com.westlyf.model.Client;
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
    private final ClientRepository clientRepository;

    @Autowired
    public DatabaseLoader(EmployeeRepository employeeRepository, ClientRepository clientRepository) {
        this.employeeRepository = employeeRepository;
        this.clientRepository = clientRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.employeeRepository.save(new Employee("Yves", "Francisco", "Programmer"));
        this.employeeRepository.save(new Employee("Yves", "Francisco", "Programmer"));
        this.employeeRepository.save(new Employee("Yves", "Francisco", "Programmer"));

//        this.customerRepository.save(new Client("Yves", "Hello World",
//                "Manila", "123",
//                10000, 7000, new Date(), "1234567890"));
//        this.customerRepository.save(new Client("asda", "Hello World",
//                "Manila", "456",
//                10000, 7000, new Date(), "1234567890"));
//        this.customerRepository.save(new Client("asdas", "Hello World",
//                "Manila", "789",
//                10000, 7000, new Date(), "1234567890"));
//        this.customerRepository.save(new Client("asdasd", "Hello World",
//                "Manila", "0123",
//                10000, 7000, new Date(), "1234567890"));

        this.clientRepository.save(new Client("Yves Rupert Francisco",
                "Cras mattis consectetur purus sit amet fermentum. " +
                        "Cras justo odio, dapibus ac facilisis in, " +
                        "egestas eget quam. Morbi leo risus, " +
                        "porta ac consectetur ac, vestibulum at eros.;",
                "1341 E. Quintos St. Sampaloc Manila", "G", 99999, 10000,
                "1234567890"));

        this.clientRepository.save(new Client("Yves",
                "Cras mattis consectetur purus sit amet fermentum. " +
                        "Cras justo odio, dapibus ac facilisis in, " +
                        "egestas eget quam. Morbi leo risus, " +
                        "porta ac consectetur ac, vestibulum at eros.;",
                "1341 E. Quintos St. Sampaloc Manila", "A", 99999, 10000,
                "1234567890"));

    }
}
