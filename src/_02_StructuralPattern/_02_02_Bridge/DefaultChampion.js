import Champion from "./Champion.js";

/**
 * @typedef { import("./Skin").default } Skin
 */

export default class DefaultChampion extends Champion {
  /**
   * 챔피언명
   * @type { string }
   */
  #name

  /**
   * @type { Skin }
   */
  #skin

  /**
   * @param { string } name
   * @param { Skin } skin
   */
  constructor(name, skin) {
    super();
    this.#name = name;
    this.#skin = skin;
  }

  /** @override */
  move() {
    console.log(`${this.#skin.getName()} ${this.#name} - move`);
  }

  /** @override */
  skillQ() {
    console.log(`${this.#skin.getName()} ${this.#name} Skill Q`);
  }
  
  /** @override */
  skillW() {
    console.log(`${this.#skin.getName()} ${this.#name} Skill W`);
  }

  /** @override */
  skillE() {
    console.log(`${this.#skin.getName()} ${this.#name} Skill E`);
  }
  
  /** @override */
  skillR() {
    console.log(`${this.#skin.getName()} ${this.#name} Skill R`);
  }
}