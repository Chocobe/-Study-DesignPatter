import Request from "./Request.js";

/**
 * @typedef { import("./RequestHandler").default } RequestHandler
 */


export default class Client {
  /** @type { RequestHandler } */
  #requestHandler;

  /** @param { RequestHandler } requestHandler */
  constructor(requestHandler) {
    this.#requestHandler = requestHandler;
  }

  doWork() {
    const request = new Request("안녕하세요");
    this.#requestHandler.handler(request);
  }
}