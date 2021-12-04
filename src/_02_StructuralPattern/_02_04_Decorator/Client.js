/**
 * @typedef { import("./CommentService").default } CommentService
 */

export default class Client {
  /** @type { CommentService } */
  #commentService;

  /** @param { CommentService } commentService */
  constructor(commentService) {
    this.#commentService = commentService;
  }

  /** @param { String } comment */
  writeComment(comment) {
    this.#commentService.addComment(comment);
  }
}