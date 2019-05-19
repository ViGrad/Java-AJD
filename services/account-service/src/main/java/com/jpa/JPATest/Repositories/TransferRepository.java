package com.jpa.JPATest.Repositories;

import com.jpa.JPATest.Entities.Transfers.Virement;
import org.springframework.data.repository.CrudRepository;

public interface TransferRepository extends CrudRepository<Virement, Long> {
}
