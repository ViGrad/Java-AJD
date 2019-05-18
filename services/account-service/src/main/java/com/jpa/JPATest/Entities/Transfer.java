package com.jpa.JPATest.Entities;

import com.jpa.JPATest.Entities.Accounts.Account;

import javax.persistence.*;

@Entity
public class Transfer {
    private long id;
    private Operation debit;
    private Operation credit;
    private String label;

    public Transfer() {
    }

    public Transfer(Operation debit, Operation credit, String label) {
        this.debit = debit;
        this.credit = credit;
        this.label = label;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @OneToOne(fetch = FetchType.EAGER)
    public Operation getDebit() {
        return debit;
    }

    public void setDebit(Operation debit) {
        this.debit = debit;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @OneToOne(fetch = FetchType.EAGER)
    public Operation getCredit() {
        return credit;
    }

    public void setCredit(Operation credit) {
        this.credit = credit;
    }

    @Override
    public String toString() {
        return "Transfer{" +
                "id=" + id +
                ", debit=" + debit +
                ", credit=" + credit +
                ", label='" + label +
                '}';
    }
}
