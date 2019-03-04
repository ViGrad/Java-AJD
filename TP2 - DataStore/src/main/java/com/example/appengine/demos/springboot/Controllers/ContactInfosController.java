package com.example.appengine.demos.springboot.Controllers;

import com.example.appengine.demos.springboot.Repositories.ContactInfosRepository;
import com.example.appengine.demos.springboot.Repositories.EmployeeRepository;
import com.google.appengine.api.datastore.Entity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactInfosController {
    EmployeeRepository employeeRepository;
    ContactInfosRepository contactInfoRepository;


    public ContactInfosController() {
        employeeRepository = new EmployeeRepository();
        contactInfoRepository = new ContactInfosRepository();
    }

    @PostMapping("/employee/{key}/contactInfos")
    public void Create(@PathVariable("key")String key, String homeAddress, String phoneNumber, String emailAdress) throws Exception {
        Entity employee = employeeRepository.GetByKey(key);
        contactInfoRepository.AddContactInfos(employee, homeAddress, phoneNumber, emailAdress);
    }
}
