package com.jpa.JPATest.Controllers;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Operation;
import com.jpa.JPATest.Entities.Transfer;
import com.jpa.JPATest.Factories.TransferFactory;
import com.jpa.JPATest.Repositories.AccountRepository;
import com.jpa.JPATest.Repositories.OperationRepository;
import com.jpa.JPATest.Repositories.TransferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.GeneratedValue;
import java.util.Map;

@RestController
public class TransferController {
    private TransferRepository transferRepository;
    private AccountRepository accountRepository;

    @Autowired
    public TransferController(TransferRepository transferRepository, AccountRepository accountRepository, OperationRepository operationRepository) {
        super();
        this.transferRepository = transferRepository;
        this.accountRepository = accountRepository;
    }

    @GetMapping("/transfer/{id}")
    public Transfer GetById(@PathVariable Long id) {
        return transferRepository.findById(id).get();
    }

    @PostMapping("/transfer")
    public Long Transfer(@RequestBody Map<String,Object> params) throws Exception {
        String fromAccountId = params.get("fromAccountId").toString();
        String toAccountId = params.get("toAccountId").toString();
        String label = params.get("label").toString();
        int amount = Integer.parseInt(params.get("amount").toString());

        Account debited;
        Account credited;

        try {
            debited = accountRepository.findById(Long.parseLong(fromAccountId)).get();
            credited = accountRepository.findById(Long.parseLong(toAccountId)).get();
        }
        catch (Exception ex) {
            throw new Exception("Account not found");
        }

        Transfer transfer = TransferFactory.createTransfer(debited, credited, label, amount);

        return transfer.getId();
    }
}
