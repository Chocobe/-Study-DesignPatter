export default class Ship {
  /** @type { string } */
  #name;

  /** @type { string } */
  #type;

  /** @type { string } */
  #color;

  /** @type { string } */
  #logo;

  /**
   * @param { string } name
   * @param { string } type
   * @param { string } color
   * @param { string } logo
   */
  constructor(name, type, color, logo) {
    this.#name = name;
    this.#type = type;
    this.#color = color;
    this.#logo = logo;
  }

  /** @returns { string } */
  get name() {
    return this.#name;
  }
  
  /** @param { string } name */
  set name(name) {
    this.#name = name;
  }

  /** @returns { string } */
  get type() {
    return this.#type;
  }

  /** @param { string } type */
  set type(type) {
    this.#type = type;
  }

  /** @returns { string } */
  get color() {
    return this.#color;
  }

  /** @param { string } color */
  set color(color) {
    this.#color = color;
  }

  /** @returns { string } */
  get logo() {
    return this.#logo;
  }

  /** @param { string } logo */
  set logo(logo) {
    this.#logo = logo;
  }
  
  print() {
    console.log(`
      Ship: {
        name: "${this.#name}",
        type: "${this.#type}",
        color: "${this.#color}",
        logo: "${this.#logo}",
      }
    `);
  }
}