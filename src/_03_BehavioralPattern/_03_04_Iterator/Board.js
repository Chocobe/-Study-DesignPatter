import Post from "./Post.js";
import RecentPostIterator from "./RecentPostIterator.js";
import AscPostIterator from "./AscPostIterator.js";

export default class Board {
  /** @type { Post[] } */
  #posts;

  constructor() {
    this.#posts = [];
  }

  /** @returns { Post[] } */
  getPosts() {
    return this.#posts;
  }
  /** @param { Post[] } posts */
  setPosts(posts) {
    this.#posts = posts;
  }

  /** @param { string } content */
  addPost(content) {
    this.#posts.push(new Post(content));
  }
  
  /** @returns { RecentPostIterator } */
  getRecentPostIterator() {
    return new RecentPostIterator(this.#posts);
  }

  /** @returns {AscPostIterator } */
  getAscPostIterator() {
    return new AscPostIterator(this.#posts);
  }
}