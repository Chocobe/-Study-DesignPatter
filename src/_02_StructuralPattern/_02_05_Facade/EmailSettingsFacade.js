export default class EmailSettingsFacade {
  /** @type { string } */
  #host;

  /** @param { string } host */
  constructor(host) {
    this.#host = host;
  }

  // host
  /** @returns { string } */
  getHost() {
    return this.#host;
  }
  /** @param { string } host */
  setHost(host) {
    this.#host = host;
  }
}