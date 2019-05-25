package com.bank.services.accountservice.Controllers;

import com.bank.services.accountservice.Entities.Transfer;
import com.bank.services.accountservice.Factories.TransferFactory;
import com.bank.services.accountservice.Repositories.AccountRepository;
import com.bank.services.accountservice.Entities.Accounts.Account;
import com.bank.services.accountservice.Factories.AccountFactory;
import com.bank.services.accountservice.Repositories.TransferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class AccountController {
    private AccountRepository accountRepository;
    private TransferRepository transferRepository;

    @Autowired
    public AccountController(AccountRepository accountRepository, TransferRepository transferRepository) {
        super();
        this.accountRepository = accountRepository;
        this.transferRepository = transferRepository;
    }


    @GetMapping("/account")
    public Iterable<Account> Get() {
        return accountRepository.findAll();
    }

    @GetMapping("/account/{clientId}")
    public Iterable<Account> GetByClientId(@PathVariable Long clientId) {
        return accountRepository.findByClientId(clientId);
    }



    @GetMapping("/account/{clientId}/{accountId}")
    public Iterable<Account> GetByClientId(@PathVariable Long clientId, @PathVariable Long accountId) {
        return accountRepository.findByClientIdAndId(clientId, accountId);
    }

    @PostMapping("/account/{clientId}")
    public Long CreateAccount(@PathVariable Long clientId, @RequestBody Map<String,Object> params) throws Exception {
        String accountType = params.get("accountType").toString();
        String initialAmountString = params.get("initialAmount").toString();
        double initialAmount = Double.parseDouble(initialAmountString);

        Account account = AccountFactory.createAccount(Integer.parseInt(accountType), clientId);
        accountRepository.save(account);

        if(initialAmount > 0) {
            Account moneyProvider = accountRepository.findByType("Money Provider").get(0);
            Transfer transfer = TransferFactory.createTransfer(moneyProvider, account, "Credit initial", initialAmount);
            transferRepository.save(transfer);
        }

        return account.getId();
    }

}
