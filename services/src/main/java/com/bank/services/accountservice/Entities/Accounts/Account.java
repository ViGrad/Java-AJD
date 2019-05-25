package com.bank.services.accountservice.Entities.Accounts;

import com.bank.services.accountservice.Entities.Operation;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public abstract class Account {
    private Long id;
    private Long clientId;
    private List<Operation> operations = new ArrayList<>();
    private String type;

    public Account() {
    }

    public Account(Long clientId, String type) {
        this.clientId = clientId;
        this.type = type;
    }

    public double getBalance() {
        double balance = 0;
        for (Operation operation: operations) {
            balance += operation.getAmount();
        }
        return balance;
    }

    public void setBalance(double balance) {

    }

    protected boolean shouldBeAValidBalance(double potentatialBalance) {
        return potentatialBalance >= 0;
    }

    public boolean operationShouldPass(Operation operation) {
        double potentialBalance = getBalance() + operation.getAmount();
        return shouldBeAValidBalance(potentialBalance);
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    @OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
    public List<Operation> getOperations() {
        return operations;
    }

    public void setOperations(List<Operation> operations) {
        this.operations = operations;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", clientId=" + clientId +
                ", operations=" + operations +
                ", type='" + type + '\'' +
                '}';
    }
}
