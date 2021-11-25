import UserDetail from "./UserDetail.js";

/**
 * @typedef { import("./Account").default } Account
 */

export default class AccountUserDetail extends UserDetail {
  /** @type { Account } */
  #account;

  /** @param { Account } account */
  constructor(account) {
    super();
    this.#account =account;
  }

  /**
   * @override
   * @returns { string }
   */
  getUsername() {
    return this.#account.getName();
  }

  /**
   * @override
   * @returns { string }
   */
  getPassword() {
    return this.#account.getPw();
  }
}