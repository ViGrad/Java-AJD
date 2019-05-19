package com.jpa.JPATest;

import com.jpa.JPATest.Entities.Accounts.Account;
import com.jpa.JPATest.Entities.Accounts.DepotAccount;
import com.jpa.JPATest.Entities.Accounts.MoneyProviderAccount;
import com.jpa.JPATest.Entities.Accounts.PassBookAccount;
import com.jpa.JPATest.Entities.Operation;
import com.jpa.JPATest.Entities.Transfer;
import com.jpa.JPATest.Factories.AccountFactory;
import com.jpa.JPATest.Factories.TransferFactory;
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
	public CommandLineRunner demo(AccountRepository accountRepository, OperationRepository operationRepository, TransferRepository transferRepository) {
		return (args) -> {
			Account providerAccount = AccountFactory.createAccount(3, new Long(0));
			Account passBookAccountA = new PassBookAccount(new Long(24348990),"Livret A", 3000, 2);
			Account depotAccount = new DepotAccount(new Long(9977660));

			accountRepository.save(providerAccount);
			accountRepository.save(passBookAccountA);
			accountRepository.save(depotAccount);

			Transfer provideMoneyForPasswBookAAccount = TransferFactory.createTransfer(providerAccount, passBookAccountA, "Providing money", 3000);
			Transfer provideMoneyForDepotAccount = TransferFactory.createTransfer(providerAccount, depotAccount, "Providing money", 1500);

			transferRepository.save(provideMoneyForPasswBookAAccount);
			transferRepository.save(provideMoneyForDepotAccount);

			passBookAccountA = accountRepository.findById(passBookAccountA.getId()).get();
			depotAccount = accountRepository.findById(depotAccount.getId()).get();


			Transfer transfer = TransferFactory.createTransfer(passBookAccountA, depotAccount, "Virement", 3000);
			transferRepository.save(transfer);
		};
	}


}
