package com.jpa.JPATest;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Accounts.Depot;
import com.jpa.JPATest.Entities.Accounts.PassBook;
import com.jpa.JPATest.Entities.Operation;
import com.jpa.JPATest.Entities.Transfers.Virement;
import com.jpa.JPATest.Repositories.AccountRepository;
import com.jpa.JPATest.Repositories.OperationRepository;
import com.jpa.JPATest.Repositories.TransferRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JpaTestApplication {
	private static final Logger log = LoggerFactory.getLogger(JpaTestApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(JpaTestApplication.class, args);
	}

	@Bean
	public CommandLineRunner populateDatabase(AccountRepository accountRepository, OperationRepository operationRepository, TransferRepository transferRepository) {
		return (args) -> {
			PassBook passBookA = new PassBook(new Long(24348990),"Livret A", 3000, 2);
			Depot depot = new Depot(new Long(9977660));

			accountRepository.save(passBookA);
			accountRepository.save(depot);


			Operation debit = new Operation(passBookA, "label", -3000);
			Operation credit = new Operation(depot, "label", 3000);

			Virement virement = new Virement(debit, credit);

			credit.setTransfer(virement);
			debit.setTransfer(virement);

			transferRepository.save(virement);


			log.info("Accounts found with findAll():");
			log.info("-------------------------------");
			for (Account a : accountRepository.findAll()) {
				log.info(a.toString());
			}
			log.info("");


			log.info("Transfers found with findAll():");
			log.info("-------------------------------");
			for (Virement a : transferRepository.findAll()) {
				log.info(a.toString());
			}
			log.info("");


			log.info("Operations found with findAll():");
			log.info("-------------------------------");
			for (Operation a : operationRepository.findAll()) {
				log.info(a.toString());
			}
			log.info("");
		};
	}


}
