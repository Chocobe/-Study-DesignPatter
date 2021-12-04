export default class Session {
  /** @type { Map } */
  #properties;

  /** @param { Map } properties */
  constructor(properties) {
    this.#properties = properties;
  }

  /** @returns { Map } */
  getProperties() {
    return this.#properties;
  }
}