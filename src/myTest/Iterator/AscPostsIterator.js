import Iterator from "./Iterator.js";

/**
 * @typedef { import("./Board").default } Board
 */

/** @template T */
export default class AscPostsIterator extends Iterator {
  /** @type { IterableIterator<T> } */
  #internalIterator;

  /** @type { boolean } */
  #done;

  /** @param { T[] } posts */
  constructor(posts) {
    super();
    
    this.#done = posts.length === 0;
    
    const copiedPosts = [...posts];
    copiedPosts[Symbol.iterator] = function*() {
      for(let i = 0; i< copiedPosts.length; i++) {
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
    const nextResult = this.#internalIterator.next();
    this.#done = nextResult.done;
    
    return nextResult;
  }

  /**
   * @override
   * @returns { boolean }
   */
  hasNext() {
    this.#done;
  }
}