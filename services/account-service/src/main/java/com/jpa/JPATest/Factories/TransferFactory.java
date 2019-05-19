package com.jpa.JPATest.Factories;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Operation;
import com.jpa.JPATest.Entities.Transfer;

public class TransferFactory {
    public static Transfer createTransfer(Account debited, Account credited, String label, double amount) {
        Operation debit = new Operation(debited, -amount);
        Operation credit = new Operation(credited, amount);

        Transfer transfer = new Transfer(debit, credit, label);

        return transfer;
    }
}
