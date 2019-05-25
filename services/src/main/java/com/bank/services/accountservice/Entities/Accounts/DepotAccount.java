package com.bank.services.accountservice.Entities.Accounts;

import javax.persistence.Entity;

@Entity
public class DepotAccount extends Account {
    private static String ACCOUNT_NAME = "dépot";

    public DepotAccount() {
    }

    public DepotAccount(Long clientId) {
        super(clientId, ACCOUNT_NAME);
    }

    @Override
    public String toString() {
        return "DepotAccount{"+ super.toString() + "}";
    }
}
