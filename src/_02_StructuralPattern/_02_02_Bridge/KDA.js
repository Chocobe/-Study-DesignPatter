import Skin from "./Skin.js";

export default class KDA extends Skin {
  /**
   * 스킨명
   * @type { string }
   */
  #name;

  constructor() {
    super();
    this.#name = "KDA";
  }

  /**
   * @override
   * @returns { string }
   */
  getName() {
    return this.#name;
  }
}