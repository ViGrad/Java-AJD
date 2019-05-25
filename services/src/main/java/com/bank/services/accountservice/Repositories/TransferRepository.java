package com.bank.services.accountservice.Repositories;

import com.bank.services.accountservice.Entities.Accounts.Account;
import com.bank.services.accountservice.Entities.Transfer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TransferRepository extends CrudRepository<Transfer, Long> {

}
