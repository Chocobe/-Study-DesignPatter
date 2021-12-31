import Iterator from "./Iterator.js";

/**
 * @typedef { import("./Post").default } Post
 */

/** @extends { Iterator<Post> } */
export default class PostsAscIterator extends Iterator {
  /** @param { Post[] } source */
  constructor(source) {
    super(source);
  }

  /** @override */
  _initItorator() {
    this._source.sort((a, b) => a.getCreateAt().getTime() - b.getCreateAt().getTime());
    this._source[Symbol.iterator] = function*() {
      let i = 0;
      while(true) {
        yield this[i++];
      }
    }
  }
}