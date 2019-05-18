package com.jpa.JPATest;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Accounts.Depot;
import com.jpa.JPATest.Entities.Accounts.PassBook;
import com.jpa.JPATest.Entities.Operation;
import com.jpa.JPATest.Repositories.AccountRepository;
import com.jpa.JPATest.Repositories.OperationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class JpaTestApplication {
	private static final Logger log = LoggerFactory.getLogger(JpaTestApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(JpaTestApplication.class, args);
	}


	@Bean
	public CommandLineRunner demo(AccountRepository accountRepository, OperationRepository operationRepository) {
		return (args) -> {
			PassBook passBookA = new PassBook(new Long(24348990),"Livret A", 3000, 2);
			Depot depot = new Depot(new Long(9977660));

			accountRepository.save(passBookA);
			accountRepository.save(depot);

			log.info("Cities found with findAll():");
			log.info("-------------------------------");
			for (Account a : accountRepository.findAll()) {
				log.info(a.toString());
			}
			log.info("");

			Operation operation = new Operation(depot, "label", 2000, passBookA.getId());
			Operation operation2 = new Operation(passBookA, "label", -2000, depot.getId());

			depot.getOperations().add(operation);
			passBookA.getOperations().add(operation2);

			ArrayList<Operation> operations = new ArrayList<Operation>();
			operations.add(operation);
			operations.add(operation2);

			operationRepository.saveAll(operations);
		};
	}


}
