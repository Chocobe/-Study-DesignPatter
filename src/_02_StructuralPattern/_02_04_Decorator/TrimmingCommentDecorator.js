import CommentDecorator from "./CommentDecorator.js";

/**
 * @typedef { import("./CommentService").default } CommentService
 */

export default class TrimmingCommentDecorator extends CommentDecorator {
  /** @param { CommentService } commentService */
  constructor(commentService) {
    super(commentService);
  }

  /** 
   * @override
   * @param { string } comment 
   */
  addComment(comment) {
    super.addComment(this.#trim(comment));
  }

  /**
   * @param { string } comment
   * @returns { string }
   */
  #trim(comment) {
    return comment.replace("...", "");
  }
}