import Component from "./Component.js";

export default class Bag extends Component {
  /** @type { Component[] } */
  #components;

  constructor() {
    super();
    this.#components = [];
  }

  /**
   * @param { Component } component
   * @returns { Bag }
   */
  add(component) {
    this.#components.push(component);
    return this;
  }
  
  /**
   * @override
   * @returns { number }
   */
  getPrice() {
    return this.#components
      .reduce((total, component) => total + component.getPrice(), 0);
  }
}