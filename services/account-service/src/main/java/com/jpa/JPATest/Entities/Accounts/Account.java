package com.jpa.JPATest.Entities.Accounts;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jpa.JPATest.Entities.Operation;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public abstract class Account {
    protected Long id;
    protected Long clientId;
    protected List<Operation> operations = new ArrayList<>();
    protected String name;

    public Account() {
    }

    public Account(Long clientId, String name) {
        this.clientId = clientId;
        this.name = name;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", clientId=" + clientId +
                ", operations=" + operations +
                ", name='" + name + '\'' +
                '}';
    }
}
