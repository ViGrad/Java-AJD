package com.bank.services.userservice.repositories;

import com.google.appengine.api.datastore.*;

import java.util.Date;
import java.util.List;

public class ClientRepository {
    DatastoreService dataStore;

    public ClientRepository() {
        dataStore = DatastoreServiceFactory.getDatastoreService();
    }

    public List<Entity> Get() {
        Query q = new Query("Client");
        List<Entity> results = dataStore.prepare(q).asList(FetchOptions.Builder.withDefaults());
        return results;
    }

    public Entity GetById(long id) throws Exception {
        Entity result;
        Key clientKey = KeyFactory.createKey("Client", id);

        try {
            result = dataStore.get(clientKey);
        }
        catch (Exception ex) {
            throw new Exception("Unknown ID", ex);
        }

        return result;
    }

    public long Create(String firstName, String lastName, String password) {
        Entity client = new Entity("Client");

        client.setProperty("firstName", firstName);
        client.setProperty("lastName", lastName);
        client.setProperty("password", password);
        client.setProperty("registerDate", new Date());
        client.setProperty("active", false);
        dataStore.put(client);

        return client.getKey().getId();
    }

    public void Modify(long id, String firstName, String lastName) throws Exception {
        Transaction txn = dataStore.beginTransaction();

        try {
            Entity client = GetById(id);
            if (!firstName.isEmpty()) {
                client.setProperty("firstName", firstName);
            }

            if (!lastName.isEmpty()) {
                client.setProperty("lastName", lastName);
            }
            dataStore.put(txn, client);
            txn.commit();
        }
        catch (Exception ex) {
            txn.rollback();
            throw ex;
        }
    }
}
