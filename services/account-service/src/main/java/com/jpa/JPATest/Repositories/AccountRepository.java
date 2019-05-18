package com.jpa.JPATest.Repositories;

import com.jpa.JPATest.Entities.Accounts.Account;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, Long> {

}
