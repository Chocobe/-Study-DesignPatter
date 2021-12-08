/**
 * @typedef { import("./Request").default } Request
 */

export default class RequestHandler {
  /** @type { RequestHandler } */
  #nextHandler;

  /** @param { RequestHandler } nextHandler */
  constructor(nextHandler) {
    this.#nextHandler = nextHandler;
  }

  /** @param { Request } request */
  handler(request) {
    if(this.#nextHandler) this.#nextHandler.handler(request);
  }
}