package com.jpa.JPATest.Factories;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Operation;
import com.jpa.JPATest.Entities.Transfers.Virement;

public class TransferFactory {
    public static Virement createTransfer(Account debited, Account credited, String label, double amount) {
        Operation debit = new Operation(debited, label, -amount);
        Operation credit = new Operation(credited, label, amount);

        Virement virement = new Virement(debit, credit);

        return virement;
    }
}
