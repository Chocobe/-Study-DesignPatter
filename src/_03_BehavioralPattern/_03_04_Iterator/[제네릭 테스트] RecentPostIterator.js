// @ts-check

import Iterator from "./[제네릭 테스트] Iterator.js";

/** @template { string | number } T  */
export default class RecentPostIterator extends Iterator {
  /**
   * @generator
   * @yields { T }
   */
  #internalIterator;

  /** @param { T[] } posts */
  constructor(posts) {
    super();
    
    const copiedPosts = [...posts].sort((a, b) => Number(b) - Number(a));
    copiedPosts[Symbol.iterator] = function*() {
      for(let i = 0; i < this.length; i++) {
        yield this[i];
      }
    }

    this.#internalIterator = copiedPosts[Symbol.iterator]();
  }
  
  /**
   * @override
   * @returns { IteratorResult<T> }
   */
  next() {
    return this.#internalIterator.next();
  }
}

// const a = new RecentPostIterator([1, 2, 3]);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
