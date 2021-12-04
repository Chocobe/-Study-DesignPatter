export default class CommentService {
  /**
   * @abstract
   * @param { string } _comment
   */
  addComment(_comment) {
    throw new Error("CommentService.addComment()는 Abstract Method 입니다.");
  }
}