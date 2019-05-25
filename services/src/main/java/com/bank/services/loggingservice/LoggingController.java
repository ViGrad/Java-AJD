package com.bank.services.loggingservice;

import com.bank.services.userservice.repositories.ClientRepository;
import com.google.appengine.api.datastore.Entity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/logging")
public class LoggingController {
    private LoggingRepository loggingRepository;

    public LoggingController() {
        loggingRepository = new LoggingRepository();
    }

    @GetMapping
    public List<Entity> GetAll() {
        return loggingRepository.Get();
    }


    @PostMapping
    public long Create(@RequestParam("path") String path,  @RequestParam("method") String method) {
        System.out.println("PATH: " + path);
        System.out.println("METHOD: " + method);


        return loggingRepository.Create(path, method);
    }
}
