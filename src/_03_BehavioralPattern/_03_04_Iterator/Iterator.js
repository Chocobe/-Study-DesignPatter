/**
 * @typedef { import("./Post").default } Post
 */

export default class Iterator {
  /**
   * @abstract
   * @returns { IteratorResult<Post> }
   */
  next() {
    throw new Error("Iterator.next() 는 Abstract Method 입니다.");
  }
}
