package com.bank.services.accountservice.Repositories;

import com.bank.services.accountservice.Entities.Transfer;
import org.springframework.data.repository.CrudRepository;

public interface TransferRepository extends CrudRepository<Transfer, Long> {
}
