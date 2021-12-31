import Iterator from "./Iterator.js";

/**
 * @typedef { import("./Post").default } Post
 */

/** @extends { Iterator<Post> } */
export default class PostRecentIterator extends Iterator {
  /** @param { Post[] } source */
  constructor(source) {
    super(source);
  }

  /** @override */
  _initItorator() {
    this._source.sort((a, b) => b.getCreateAt().getTime() - a.getCreateAt().getTime());
    this._source[Symbol.iterator] = function*() {
      let i = 0;
      while(true) {
        yield this[i++];
      }
    }
  }
}
