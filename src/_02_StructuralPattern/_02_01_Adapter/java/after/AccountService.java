package _02_StructuralPattern._02_01_Adapter.java.after;

public class AccountService {
  
  public Account findAccountByUsername(String username) {
    Account account = new Account();
    account.setName(username);
    account.setPassword(username);
    account.setEmail(username);

    return account;
  }
  
}
