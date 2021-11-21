export default class Anchor {
  /** @type { string } */
  #name;

  /** @param { string } name */
  constructor(name) {
    this.#name = name;
  }

  /** @returns { string } */
  getName() {
    return this.#name;
  }
  /** @param { string } name */
  setName(name) {
    this.#name = name;
  }
}