import RequestHandler from "./RequestHandler.js";

/**
 * @typedef { import("./Request").default } Request
 */

export default class PrintRequestHandler extends RequestHandler {
  /** @param { RequestHandler } nextHandler */
  constructor(nextHandler) {
    super(nextHandler);
  }

  /**
   * @override
   * @param { Request } request 
   */
  handler(request) {
    super.handler(request);
    console.log(request.getBody());
  }
}