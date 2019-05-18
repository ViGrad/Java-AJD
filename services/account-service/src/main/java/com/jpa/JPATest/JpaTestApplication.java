package com.jpa.JPATest;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Accounts.Depot;
import com.jpa.JPATest.Entities.Accounts.PassBook;
import com.jpa.JPATest.Entities.Operation;
import com.jpa.JPATest.Entities.Transfer;
import com.jpa.JPATest.Repositories.AccountRepository;
import com.jpa.JPATest.Repositories.OperationRepository;
import com.jpa.JPATest.Repositories.TransferRepository;
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

	public Transfer makeTransfer(Account from, Account to, String label, double sum) {
		return new Transfer();
	}


	@Bean
	public CommandLineRunner demo(AccountRepository accountRepository, OperationRepository operationRepository, TransferRepository transferRepository) {
		return (args) -> {
			PassBook passBookA = new PassBook(new Long(24348990),"Livret A", 3000, 2);
			Depot depot = new Depot(new Long(9977660));

			accountRepository.save(passBookA);
			accountRepository.save(depot);

			log.info("Accounts found with findAll():");
			log.info("-------------------------------");
			for (Account a : accountRepository.findAll()) {
				log.info(a.toString());
			}
			log.info("");


			Operation debit = new Operation(passBookA, -3000);
			Operation credit = new Operation(depot, 3000);

			operationRepository.save(debit);
			operationRepository.save(credit);

			Transfer transfer = new Transfer(debit, credit, "label");

			debit.setTransfer(transfer);
			credit.setTransfer(transfer);

			transferRepository.save(transfer);
			operationRepository.save(debit);
			operationRepository.save(credit);


			log.info("Accounts found with findAll():");
			log.info("-------------------------------");
			for (Account a : accountRepository.findAll()) {
				log.info(a.toString());
			}
			log.info("");


			log.info("Transfers found with findAll():");
			log.info("-------------------------------");
			for (Transfer a : transferRepository.findAll()) {
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
