import Subscriber from "./Subscriber.js";

export default class User extends Subscriber {
  /** @type { string } */
  #name;

  /** @param { string } name */
  constructor(name) {
    super();
    this.#name = name;
  }

  /**
   * @override
   * @returns { string }
   */
  getName() {
    return this.#name;
  }

  /**
   * @override
   * @param { string } message 
   */
  handleMessage(message) {
    console.log(`수신자: ${this.#name} - ${message}`);
  }
}