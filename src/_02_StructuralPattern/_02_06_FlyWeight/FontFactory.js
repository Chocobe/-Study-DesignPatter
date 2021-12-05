import Font from "./Font.js";

export default class FontFactory {
  /** @type { Map<string, Font> } */
  #cache = new Map();

  /**
   * @param { string } font 
   * @returns { Font }
   */
  getFont(font) {
    if(this.#cache.has(font)) {
      return this.#cache.get(font);
    } else {
      const fontInfo = font.split(":");
      const newFont = new Font(fontInfo[0], +fontInfo[1]);
      this.#cache.set(font, newFont);

      return newFont;
    }
  }
}