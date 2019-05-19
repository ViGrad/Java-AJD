package com.jpa.JPATest.Factories;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Accounts.Depot;
import com.jpa.JPATest.Entities.Accounts.PassBook;

public class AccountFactory {
    public static Account createAccount(int accountType, Long clientId) throws Exception {
        Account account;

        switch (accountType) {
            case 1:
                account = new Depot(clientId);
                break;

            case 2:
                account = new PassBook(clientId, "Livret A", 3000, 2.9f);
                break;

            default:
                throw new Exception("Account type unknow");
        }

        return account;
    }
}
