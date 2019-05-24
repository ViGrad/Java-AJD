package com.bank.Entities.Accounts;

import javax.persistence.Entity;

@Entity
public class PassBookAccount extends Account {
    public double maximumAmount;
    public float interests;

    public PassBookAccount() {
    }

    public PassBookAccount(Long clientId, String name, double maximumAmount, float interests) {
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
        return "PassBookAccount{"+ super.toString() +
                "maximumAmount=" + maximumAmount +
                ", interests=" + interests +
                '}';
    }
}
