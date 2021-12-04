import CommentService from "./CommentService.js";

export default class CommentDecorator extends CommentService {
  /** @type { CommentService } */
  #commentService;

  /** @param { CommentService } */
  constructor(commentService) {
    super();
    this.#commentService = commentService;
  }

  /**
   * @override 
   * @param { string } comment 
   */
  addComment(comment) {
    this.#commentService.addComment(comment);
  }
}