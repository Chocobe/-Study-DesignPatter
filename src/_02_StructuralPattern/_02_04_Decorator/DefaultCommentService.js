import CommentService from "./CommentService.js";

export default class DefaultCommentService extends CommentService {
  constructor() {
    super();
  }
  
  /**
   * @override
   * @param { string } comment
   */
  addComment(comment) {
    console.log(comment);
  }
}