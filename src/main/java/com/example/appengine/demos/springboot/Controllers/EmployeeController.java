package com.example.appengine.demos.springboot.Controllers;
import com.example.appengine.demos.springboot.Repositories.EmployeeRepository;
import org.springframework.web.bind.annotation.*;
import com.google.appengine.api.datastore.*;
import java.util.List;

@RestController
public class EmployeeController {
    private EmployeeRepository employeeRepository;

    public EmployeeController() {
        employeeRepository = new EmployeeRepository();
    }

    @GetMapping("/employee")
    public List<Entity> Get() {
        return employeeRepository.Get();
    }

    @GetMapping("/employee/{key}")
    public Entity GetByLastName(@PathVariable("key") String key) {
        try {
            return employeeRepository.GetByKey(key);
        }
        catch (Exception ex) {
            return null;
        }
    }

    @PostMapping("/employee/{key}")
    public void Create(@PathVariable("key")String key, String firstName, String lastName, Boolean attendedHrTraining) {
        employeeRepository.Create(key, firstName, lastName, attendedHrTraining);
    }

    @PutMapping("/employee/{key}")
    public void Modify(@PathVariable("key") String key, String firstName, String lastName) throws Exception {
        employeeRepository.Modify(key, firstName, lastName);
    }


}
