import AccountUserDetail from "./AccountUserDetail.js";
import UserDetailService from "./UserDetailService.js";

/**
 * @typedef { import("./AccountService").default } AccountService
 * @typedef { import("./UserDetail").default } UserDetail
 */

export default class AccountUserDetailService extends UserDetailService {
  /** @type { AccountService } */
  #accountService;

  /** @param { AccountService } accountService */
  constructor(accountService) {
    super();
    this.#accountService = accountService;
  }

  /**
   * @override
   * @param { string } name
   * @returns { UserDetail }
   */
  loadUser(name) {
    const account = this.#accountService.findAccountByName(name);
    const accountUserDetail = new AccountUserDetail(account);
    return accountUserDetail;
  }
}