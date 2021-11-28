import Skin from "./Skin.js";

export default class PoolParty extends Skin {
  /** @type { string } */
  #name;

  constructor() {
    super();
    this.#name = "수영장";
  }

  /**
   * @override
   * @returns { string }
   */
  getName() {
    return this.#name;
  }
}