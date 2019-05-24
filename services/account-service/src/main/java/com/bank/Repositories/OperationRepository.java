package com.bank.Repositories;

import com.bank.Entities.Operation;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OperationRepository extends CrudRepository<Operation, Long> {
    List<Operation> findByTransferId(Long rentId);

}
