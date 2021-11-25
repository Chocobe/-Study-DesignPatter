import AccountService from "./AccountService.js";
import AccountUserDetailService from "./AccountUserDetailService.js";
import LoginHandler from "./LoginHandler.js";

/**
 * @typedef { import("./UserDetailService").default } UserDetailService
 */

const accountService = new AccountService();

/** @type { UserDetailService } */
const accountUserDetailService = new AccountUserDetailService(accountService);

const loginHandler = new LoginHandler(accountUserDetailService);
console.log(loginHandler.login("Kim", "Kim"));
