export default class Font {
  /** @type { string } */
  #fontFamily;

  /** @type { number } */
  #fontSize;

  /**
   * @param { string } fontFamily 
   * @param { number } fontSize 
   */
  constructor(fontFamily, fontSize) {
    this.#fontFamily = fontFamily;
    this.#fontSize = fontSize;
  }

  /** @returns { string } */
  getFontFamily() {
    return this.#fontFamily;
  }

  /** @return { number } */
  getFontSize() {
    return this.#fontSize;
  }
}