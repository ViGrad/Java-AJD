package com.jpa.JPATest.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jpa.JPATest.Entities.Accounts.Account;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Operation {
    private Long transferId;
    private Account from;
    private String label;
    private double amount;
    private Date date;
    private Long toAccoutId;

    public Operation() {}

    public Operation(Account from, String label, double amount, Long toAccoutId) {
        this.from = from;
        this.label = label;
        this.amount = amount;
        this.date = new Date();
        this.toAccoutId = toAccoutId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getTransferId() {
        return transferId;
    }

    public void setTransferId(Long transferId) {
        this.transferId = transferId;
    }


    @ManyToOne(cascade=CascadeType.REMOVE, fetch = FetchType.EAGER)
    @JsonIgnore
    public Account getFrom() {
        return from;
    }

    public void setFrom(Account from) {
        this.from = from;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Long getToAccoutId() {
        return toAccoutId;
    }

    public void setToAccoutId(Long toAccoutId) {
        this.toAccoutId = toAccoutId;
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
                "transferId=" + transferId +
                ", from=" + from.getId() +
                ", label='" + label + '\'' +
                ", amount=" + amount +
                ", date=" + date +
                ", toAccoutId=" + toAccoutId +
                '}';
    }
}

