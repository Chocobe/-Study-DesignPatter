export default class Post {
  /** @type { string } */
  content;

  /** @type { Date } */
  createAt

  /** @param { string } content */
  constructor(content) {
    this.content = content;
    this.createAt = new Date();
  }

  /** @returns { string } */
  getContent() {
    return this.content;
  }
  /** @param { string } content */
  setContent(content) {
    this.content = content;
  }

  /** @returns { Date } */
  getCreateAt() {
    return this.createAt;
  }
  /** @param { Date } createAt */
  setCreateAt(createAt) {
    this.createAt = createAt;
  }
}