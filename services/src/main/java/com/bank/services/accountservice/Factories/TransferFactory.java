package com.bank.services.accountservice.Factories;

import com.bank.services.accountservice.Entities.Accounts.Account;
import com.bank.services.accountservice.Entities.Operation;
import com.bank.services.accountservice.Entities.Transfer;

public class TransferFactory {
    public static Transfer createTransfer(Account debited, Account credited, String label, double amount) throws Exception {
        Operation debit = new Operation(debited, -amount);
        Operation credit = new Operation(credited, amount);

        if(!debited.operationShouldPass(debit)) {
            throw new  Exception("Invalid transfer: debiter have no enought money");
        }

        if(!credited.operationShouldPass(credit)) {
            throw new  Exception("Invalid transfer: crediter have no enought money");
        }

        Transfer transfer = new Transfer(debit, credit, label);
        debit.setTransfer(transfer);
        credit.setTransfer(transfer);

        return transfer;
    }
}
