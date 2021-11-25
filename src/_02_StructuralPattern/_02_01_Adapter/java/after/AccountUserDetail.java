package _02_StructuralPattern._02_01_Adapter.java.after;

import _02_StructuralPattern._02_01_Adapter.java.after.security.UserDetail;

public class AccountUserDetail implements UserDetail {

  private Account account;

  public AccountUserDetail(Account account) {
    this.account = account;
  }
  
  @Override
  public String getUsername() {
    return account.getName();
  }

  @Override
  public String getPassword() {
    return account.getPassword();
  }
  
}
