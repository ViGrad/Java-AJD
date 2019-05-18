package com.jpa.JPATest.Repositories;

import com.jpa.JPATest.Entities.Transfer;
import org.springframework.data.repository.CrudRepository;

public interface TransferRepository extends CrudRepository<Transfer, Long> {
}
