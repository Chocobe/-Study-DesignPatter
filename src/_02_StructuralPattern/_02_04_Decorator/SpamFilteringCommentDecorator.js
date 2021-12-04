import CommentDecorator from "./CommentDecorator.js";

/**
 * @typedef { import("./CommentService").default } CommentService
 */

export default class SpamFilteringCommentDecorator extends CommentDecorator {
  /** @param { CommentService } */
  constructor(commentService) {
    super(commentService);
  }

  /**
   * @override
   * @param { string } comment
   */
  addComment(comment) {
    if(!this.isNotSpam(comment)) return;

    super.addComment(comment);
  }
  
  /**
   * @param { string } comment
   * @returns { boolean }
   */
  isNotSpam(comment) {
    return comment.indexOf("http") < 0
  }
}