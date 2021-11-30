import Component from "./Component.js";

export default class Item extends Component {
  /** @type { string } */
  #name;

  /** @type { number } */
  #price;

  /**
   * @param { string } name 
   * @param { number } price 
   */
  constructor(name, price) {
    super();
    this.#name = name;
    this.#price = price;
  }

  /**
   * @override
   * @returns { number }
   */
  getPrice() {
    return this.#price;
  }
}