package com.jpa.JPATest.Repositories;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Operation;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountRepository extends CrudRepository<Account, Long> {
    List<Account> findByClientId(Long clientId);
    List<Account> findByClientIdAndType(Long clientId, String type);
    List<Account> findByClientIdAndId(Long clientId, Long id);
}
