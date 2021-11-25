/**
 * @typedef { import("./UserDetail").default } UserDetail
 */

export default class UserDetailService {
  /**
   * @abstract
   * @param { string } _username
   * @returns { UserDetail }
   */
  loadUser(_username) {
    throw new Error("UserDetailService.loadUser() 는 Abstract Method 입니다.");
  }
}