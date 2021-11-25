export default class UserDetail {
  /**
   * @abstract
   * @returns { string }
   */
  getUsername() {
    throw new Error("UserDetail.getUsername() 은 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @returns { string }
   */
  getPassword() {
    throw new Error("UserDetail.getPassword() 는 Abstract Method 입니다.");
  }
}