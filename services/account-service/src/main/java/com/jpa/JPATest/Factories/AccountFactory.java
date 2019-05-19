package com.jpa.JPATest.Factories;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Accounts.DepotAccount;
import com.jpa.JPATest.Entities.Accounts.MoneyProviderAccount;
import com.jpa.JPATest.Entities.Accounts.PassBookAccount;

public class AccountFactory {
    public static Account createAccount(int accountType, Long clientId) throws Exception {
        Account account;

        switch (accountType) {
            case 1:
                account = new DepotAccount(clientId);
                break;

            case 2:
                account = new PassBookAccount(clientId, "Livret A", 3000, 2.9f);
                break;

            case 3:
                account = new MoneyProviderAccount(clientId, "Money Provider");
                break;

            default:
                throw new Exception("Account type unknow");
        }

        return account;
    }
}
