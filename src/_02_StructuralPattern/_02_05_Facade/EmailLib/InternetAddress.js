export default class InternetAddress {
  /** @type { string } */
  #address;

  constructor(address) {
    this.#address = address;
  }

  /** @returns { string } */
  getAddress() {
    return this.#address;
  }
  /** @param { string } address */
  setAddress(address) {
    this.#address = address;
  }
}