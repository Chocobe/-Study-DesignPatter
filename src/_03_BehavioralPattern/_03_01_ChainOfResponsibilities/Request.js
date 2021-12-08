export default class Request {
  /** @type { string } */
  #body;

  /** @param { string } body */
  constructor(body) {
    this.#body = body;
  }

  /** @returns { string } */
  getBody() {
    return this.#body;
  }
  /** @param { string } body */
  setBody(body) {
    this.#body = body;
  }
}