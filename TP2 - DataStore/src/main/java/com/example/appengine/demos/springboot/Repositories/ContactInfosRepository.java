package com.example.appengine.demos.springboot.Repositories;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.EmbeddedEntity;
import com.google.appengine.api.datastore.Entity;

public class ContactInfosRepository {
    private DatastoreService dataStore;

    public ContactInfosRepository() {
        dataStore = DatastoreServiceFactory.getDatastoreService();
    }

    public void AddContactInfos(Entity employee, String homeAddress, String phoneNumber, String emailAdress) {
        EmbeddedEntity embeddedContactInfo = new EmbeddedEntity();

        embeddedContactInfo.setProperty("homeAddress", homeAddress);
        embeddedContactInfo.setProperty("phoneNumber", phoneNumber);
        embeddedContactInfo.setProperty("emailAddress", emailAdress);

        employee.setProperty("contactInfo", embeddedContactInfo);
        dataStore.put(employee);
    }
}
