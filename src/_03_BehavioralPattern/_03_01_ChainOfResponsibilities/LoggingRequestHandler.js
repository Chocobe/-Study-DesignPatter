import RequestHandler from "./RequestHandler.js";

/**
 * @typedef { import("./Request").default } Request
 */

export default class LoggingRequestHandler extends RequestHandler {
  /** @param { RequestHandler } nextHandler */
  constructor(nextHandler) {
    super(nextHandler);
  }

  /**
   * @override
   * @param { Request } request 
   */
  handler(request) {
    console.log("로깅 되었습니다.");
    super.handler(request);
  }
}