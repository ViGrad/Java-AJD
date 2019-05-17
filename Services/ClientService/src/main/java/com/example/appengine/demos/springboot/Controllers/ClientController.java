package com.example.appengine.demos.springboot.Controllers;
import com.example.appengine.demos.springboot.Repositories.ClientRepository;
import org.springframework.web.bind.annotation.*;
import com.google.appengine.api.datastore.*;
import java.util.List;

@RestController
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
    public long Create(String firstName, String lastName, String password) {
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
