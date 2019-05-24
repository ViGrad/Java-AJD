package com.bank.services.userservice.controllers;

import com.google.appengine.api.datastore.*;
import com.bank.services.userservice.repositories.ClientRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class ClientController {
    private ClientRepository clientRepository;

    public ClientController() {
        clientRepository = new ClientRepository();
    }

    @GetMapping("/client")
    public List<Entity> GetAll() {
        return clientRepository.Get();
    }

    @GetMapping("/client/{id}")
    public Entity GetByKey(@PathVariable("id") long id) {
        try {
            return clientRepository.GetById(id);
        }
        catch (Exception ex) {
            return null;
        }
    }

    @PostMapping("/client")
    public long Create(@RequestBody Map<String,Object> params) {
        String firstName = params.get("firstName").toString();
        String lastName = params.get("lastName").toString();
        String password = params.get("password").toString();

        return clientRepository.Create(firstName, lastName, password);
    }

    @PostMapping("/client/login")
    public boolean CheckPassword(long id, String password) throws Exception {
        Entity client = clientRepository.GetById(id);

        String clientPassword = client.getProperty("password").toString();
        boolean passwordIsValid = clientPassword.equals(password);

        return passwordIsValid;
    }

    @PutMapping("/client/{id}")
    public void Modify(@PathVariable("id") long id, String firstName, String lastName) throws Exception {
        clientRepository.Modify(id, firstName, lastName);
    }


}
