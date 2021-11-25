package _02_StructuralPattern._02_01_Adapter.java.after;

import _02_StructuralPattern._02_01_Adapter.java.after.security.LoginHandler;
import _02_StructuralPattern._02_01_Adapter.java.after.security.UserDetailService;

public class App {
  
  public static void main(String[] args) {
    AccountService accountService = new AccountService();
    UserDetailService userDetailService = new AccountUserDetailService(accountService);
    LoginHandler loginHandler = new LoginHandler(userDetailService);

    String username = loginHandler.login("Kim", "Kim");
    System.out.println(username);
  }
  
}
