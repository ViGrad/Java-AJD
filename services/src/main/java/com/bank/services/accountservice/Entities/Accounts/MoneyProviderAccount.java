package com.bank.services.accountservice.Entities.Accounts;

import javax.persistence.Entity;

@Entity
public class MoneyProviderAccount extends Account {

    public MoneyProviderAccount() {
    }

    public MoneyProviderAccount(Long clientId, String name) {
        super(clientId, name);
    }

    @Override
    protected boolean shouldBeAValidBalance(double potientalBalance) {
        return true;
    }
}
