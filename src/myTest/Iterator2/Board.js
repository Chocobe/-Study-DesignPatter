import Post from "./Post.js";

export default class Board {
  /** @type { Post[] } posts */
  posts;

  constructor() {
    this.posts = [];
  }

  /** @returns { Post[] } posts */
  getPosts() {
    return this.posts;
  }
  /** @param { Post[] } posts */
  setPosts(posts) {
    this.posts = posts;
  }

  /** @param { string } content */
  addPost(content) {
    this.posts.push(new Post(content));
  }
}