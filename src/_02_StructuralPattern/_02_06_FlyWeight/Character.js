/**
 * @typedef { import("./Font").default } Font
 */

export default class Character {
  /** @type { string } */
  #value;

  /** @type { string } */
  #color;

  /** @type { Font } */
  #font;

  /**
   * @param { string } value 
   * @param { string } color 
   * @param { Font } font 
   */
  constructor(value, color, font) {
    this.#value = value;
    this.#color = color;
    this.#font = font;
  }

  /** @returns { string } */
  getValue() {
    return this.#value;
  }

  /** @returns { string } */
  getColor() {
    return this.#color;
  }

  /** @returns { Font } */
  getFont() {
    return this.#font;
  }

  /** @returns { string } */
  toString() {
    return `문자: ${this.#value}`
      + ` // 색: ${this.#color}`
      + ` // 폰트: ${this.#font.getFontFamily()}`
      + ` // 사이즈: ${this.#font.getFontSize()}`;
  }
}