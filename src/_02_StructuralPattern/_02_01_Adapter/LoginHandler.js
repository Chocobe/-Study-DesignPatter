/**
 * @typedef { import("./UserDetailService").default } UserDetailService
 */

export default class LoginHandler {
  /** @type { UserDetailService } */
  #userDetailService;

  /** @param { UserDetailService } */
  constructor(userDetailService) {
    this.#userDetailService = userDetailService;
  }

  /**
   * @param { string } username
   * @param { string } password
   * @returns { string }
   */
  login(username, password) {
    const userDetail = this.#userDetailService.loadUser(username);
    
    if(userDetail.getPassword() === password) {
      return userDetail.getUsername();
    } else {
      throw new Error("로그인 실패");
    }
  }
}