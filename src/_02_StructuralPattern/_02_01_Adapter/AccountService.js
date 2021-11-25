import Account from "./Account.js"

export default class AccountService {
  /**
   * @param { string } name
   * @returns { Account }
   */
  findAccountByName(name) {
    const account = new Account();
    account.setName(name);
    account.setPw(name);
    account.setEmail(name);

    return account;
  }
}