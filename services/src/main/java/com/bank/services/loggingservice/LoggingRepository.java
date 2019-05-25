package com.bank.services.loggingservice;

import com.google.appengine.api.datastore.*;

import java.util.Date;
import java.util.List;

public class LoggingRepository {
    DatastoreService dataStore;

    public LoggingRepository() {
        dataStore = DatastoreServiceFactory.getDatastoreService();
    }


    public List<Entity> Get() {
        Query q = new Query("Log");
        List<Entity> results = dataStore.prepare(q).asList(FetchOptions.Builder.withDefaults());
        return results;
    }

    public long Create(String path, String method) {
        Entity log = new Entity("Log");

        log.setProperty("path", path);
        log.setProperty("method", method);
        dataStore.put(log);

        return log.getKey().getId();
    }
}
