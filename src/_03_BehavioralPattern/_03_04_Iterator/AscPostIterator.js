import Iterator from "./Iterator.js";

/**
 * @typedef { import("./Post").default } Post
 */

export default class AscPostIterator extends Iterator {
  /** @type { IterableIterator<Post> } */
  #internalIterator;

  /** @param { Post[] } posts */
  constructor(posts) {
    super();

    const copiedPosts = [...posts]
      .sort((a, b) => a.getCreateAt().getTime() - b.getCreateAt().getTime());

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