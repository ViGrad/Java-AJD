package com.jpa.JPATest.Entities.Transfers;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Operation;

import javax.persistence.*;

@Entity
public class Virement extends ITransfer {
    private Operation debit;
    private Operation credit;

    public Virement() {
    }

    public Virement(Operation debit, Operation credit) {
        this.debit = debit;
        this.credit = credit;
    }

    @OneToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    public Operation getDebit() {
        return debit;
    }

    public void setDebit(Operation debit) {
        this.debit = debit;
    }

    @OneToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    public Operation getCredit() {
        return credit;
    }

    public void setCredit(Operation credit) {
        this.credit = credit;
    }

    @Override
    public String toString() {
        return "Virement{" +
                "id=" + id +
                ", debit=" + debit +
                ", credit=" + credit +
                '}';
    }
}
