package com.jpa.JPATest;

import com.jpa.JPATest.Entities.Operation;
import com.jpa.JPATest.Repositories.OperationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RentController {

    private OperationRepository repository;

    @Autowired
    public RentController(OperationRepository repository) {
        super();
        this.repository = repository;
    }


    @GetMapping("/rent")
    public Iterable<Operation> Get() {
        return repository.findAll();
    }

    @GetMapping("/rent/{rentId}")
    public Iterable<Operation> GetByRentId(@PathVariable Long rentId) {
        return repository.findByTransferId(rentId);
    }

    @PostMapping("/rent")
    public void CreateRent() {

    }
}
