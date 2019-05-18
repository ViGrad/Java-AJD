package com.jpa.JPATest.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jpa.JPATest.Entities.Accounts.Account;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Operation {
    private Long id;
    private Transfer transfer;
    private Account account;
    private double amount;
    private Date date;

    public Operation() {}

    public Operation(Account account, double amount) {
        this.account = account;
        this.amount = amount;
        this.date = new Date();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @OneToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    public Transfer getTransfer() {
        return transfer;
    }

    public void setTransfer(Transfer transfer) {
        this.transfer = transfer;
    }


    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Operation{" +
                ", account=" + account.getId() +
                ", amount=" + amount +
                ", date=" + date +
                '}';
    }
}

