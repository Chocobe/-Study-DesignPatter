export default class Account {
  /** @type { string } */
  #name;

  /** @type { string } */
  #pw;

  /** @type { string } */
  #email;

  // name
  /** @returns { string } */
  getName() {
    return this.#name;
  }
  /** @param { string } name */
  setName(name) {
    this.#name = name;
  }

  // pw
  /** @returns { string } */
  getPw() {
    return this.#pw;
  }
  /** @param { string } pw */
  setPw(pw) {
    this.#pw = pw;
  }

  // email
  /** @returns { string } */
  getEmail() {
    return this.#email;
  }
  /** @param { string } email */
  setEmail(email) {
    this.#email = email;
  }
}