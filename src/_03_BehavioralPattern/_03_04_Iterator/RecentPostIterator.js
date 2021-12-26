import Iterator from "./Iterator.js";

/**
 * @typedef { import("./Post").default } Post
 */

export default class RecentPostIterator extends Iterator {
  /** @type { IterableIterator<Post> } */
  #internalIterator;

  /** @param { Post[] } posts */
  constructor(posts) {
    super();
    
    const copiedPosts = [...posts]
      .sort((a, b) => b.getCreateAt().getTime() - a.getCreateAt().getTime());

    copiedPosts[Symbol.iterator] = function*() {
      for(let i = 0; i < copiedPosts.length; i++) {
        yield copiedPosts[i];
      }
    }

    this.#internalIterator = copiedPosts[Symbol.iterator]();
  }

  /**
   * @override
   * @returns { IteratorResult<Post> }
   */
  next() {
    return this.#internalIterator.next();
  }
}
