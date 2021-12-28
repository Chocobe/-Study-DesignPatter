import Iterator from "./Iterator.js";

/**
 * @typedef { import("./Iterator").default } Iterator
 */

/** @template T */
export default class RecentPostsIterator extends Iterator {
  /** @type { IterableIterator<T> } */
  #internalIterator;

  /** @type { boolean } */
  #done;
  
  /**
   * @param { T[] } posts
   */
  constructor(posts) {
    super();
    
    this.#done = posts.length === 0;

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
   * @returns { IteratorResult<T> }
   */
  next() {
    const nextPost = this.#internalIterator.next();
    this.#done = nextPost.done;

    return nextPost;
  }

  /**
   * @override
   * @returns { boolean }
   */
  hasNext() {
    return this.#done;
  }
}