package _02_StructuralPattern._02_01_Adapter.java.after;

import _02_StructuralPattern._02_01_Adapter.java.after.security.UserDetail;
import _02_StructuralPattern._02_01_Adapter.java.after.security.UserDetailService;

public class AccountUserDetailService implements UserDetailService {
  
  private AccountService accountService;

  public AccountUserDetailService(AccountService accountService) {
    this.accountService = accountService;
  }
  
  @Override
  public UserDetail loadUser(String username) {
    return new AccountUserDetail(accountService.findAccountByUsername(username));
  }
  
}