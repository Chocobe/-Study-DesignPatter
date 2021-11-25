export default class GithubRepository {
  /**
   * 유저명
   * @type { string }
   */
  #user;

  /**
   * 저장소명
   * @type { string }
   */
  #name;

  /** @returns { string } */
  getUser() {
    return this.#user;
  }
  /** @param { string } user */
  setUser(user) {
    this.#user = user;
  }

  /** @returns { string } */
  getName() {
    return this.#name;
  }
  /** @param { string } name */
  setName(name) {
    this.#name = name;
  }
}