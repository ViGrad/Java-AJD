package com.jpa.JPATest.Entities.Accounts;

import javax.persistence.Entity;

@Entity
public class PassBook extends Account {
    public double maximumAmount;
    public float interests;

    public PassBook() {
    }

    public PassBook(Long clientId, String name, double maximumAmount, float interests) {
        super(clientId, name);
        this.maximumAmount = maximumAmount;
        this.interests = interests;
    }

    public double getMaximumAmount() {
        return maximumAmount;
    }

    public void setMaximumAmount(double maximumAmount) {
        this.maximumAmount = maximumAmount;
    }

    public float getInterests() {
        return interests;
    }

    public void setInterests(float interests) {
        this.interests = interests;
    }

    @Override
    public String toString() {
        return "PassBook{"+ super.toString() +
                "maximumAmount=" + maximumAmount +
                ", interests=" + interests +
                '}';
    }
}
