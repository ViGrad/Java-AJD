package com.example.appengine.demos.springboot.Repositories;

import com.google.appengine.api.datastore.*;

import java.util.Date;
import java.util.List;

public class EmployeeRepository {
    DatastoreService dataStore;

    public EmployeeRepository() {
        dataStore = DatastoreServiceFactory.getDatastoreService();
    }

    public List<Entity> Get() {
        Query q = new Query("Employee");
        List<Entity> results = dataStore.prepare(q).asList(FetchOptions.Builder.withDefaults());
        return results;
    }

    public Entity GetByKey(String key) throws Exception {
        Key employeeKey = KeyFactory.createKey("Employee", key);
        Entity results = dataStore.get(employeeKey);
        return results;
    }

    public void Create(String key, String firstName, String lastName, boolean attendedHrTraining) {
        Entity employee = new Entity("Employee", key);

        employee.setProperty("firstName", firstName);
        employee.setProperty("lastName", lastName);
        employee.setProperty("hireDate", new Date());
        employee.setProperty("attendedHrTraining", attendedHrTraining);

        dataStore.put(employee);
    }

    public void Modify(String key, String firstName, String lastName) throws Exception {
        Transaction txn = dataStore.beginTransaction();

        try {
            Entity employee = GetByKey(key);
            if (!firstName.isEmpty()) {
                employee.setProperty("firstName", firstName);
            }

            if (!lastName.isEmpty()) {
                employee.setProperty("lastName", lastName);
            }
            dataStore.put(txn, employee);

            txn.commit();
        }
        catch (Exception ex) {
            txn.rollback();
            throw ex;
        }
    }
}
