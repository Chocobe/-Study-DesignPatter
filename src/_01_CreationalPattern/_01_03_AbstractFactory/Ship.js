/**
 * @typedef { import("./Anchor").default } Anchor
 * @typedef { import("./Wheel").default } Wheel
 */

export default class Ship {
  /** @type { string } */
  #name;

  /** @type { string } */
  #type;

  /** @type { string } */
  #color;

  /** @type { string } */
  #logo;

  /** @type { Anchor } */
  #anchor;

  /** @type { Wheel } */
  #wheel;

  /** @returns { string } */
  getName() {
    return this.#name;
  }
  /** @param { string } name */
  setName(name) {
    this.#name = name;
  }

  /** @returns { string } */
  getType() {
    return this.#type;
  }
  /** @param { string } type */
  setType(type) {
    this.#type = type;
  }

  /** @returns { string } */
  getColor() {
    return this.#color;
  }
  /** @param { string } color */
  setColor(color) {
    this.#color = color;
  }

  /** @returns { string } */
  getLogo() {
    return this.#logo;
  }
  /** @param { string } */
  setLogo(logo) {
    this.#logo = logo;
  }

  /** @returns { Anchor } */
  getAnchor() {
    return this.#anchor;
  }
  /** @param { Anchor } anchor */
  setAnchor(anchor) {
    this.#anchor = anchor;
  }
  
  /** @returns { Wheel } */
  getWheel() {
    return this.#wheel;
  }
  /** @param { Wheel } wheel */
  setWheel(wheel) {
    this.#wheel = wheel;
  }

  printInfo() {
    console.log(`
      Ship {
        name: ${this.#name},
        type: ${this.#type},
        color: ${this.#color},
        logo: ${this.#logo},
        anchor: ${this.#anchor.getName()},
        wheel: ${this.#wheel.getName()},
      };
    `);
  }
}