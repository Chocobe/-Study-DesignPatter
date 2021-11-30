import Component from "./Component.js";
import Bag from "./Bag.js";

export default class Champion extends Component {
  /** @type { Bag } */
  #bag;

  constructor() {
    super();
    this.#bag = new Bag();
  }

  /**
   * @param { Component } component 
   * @returns { Champion }
   */
  add(component) {
    this.#bag.add(component);
    return this;
  }

  /**
   * @override
   * @returns { number }
   */
  getPrice() {
    return this.#bag.getPrice();
  }
}