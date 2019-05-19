package com.jpa.JPATest.Entities.Accounts;

import javax.persistence.Entity;

@Entity
public class Depot extends Account {
    private static String ACCOUNT_NAME = "dépot";

    public Depot() {
    }

    public Depot(Long clientId) {
        super(clientId, ACCOUNT_NAME);
    }

    @Override
    public String toString() {
        return "Depot{" +
                "id=" + id +
                ", clientId=" + clientId +
                ", operations=" + operations +
                ", name='" + name + '\'' +
                '}';
    }
}
