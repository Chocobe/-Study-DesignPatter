export default class Calculator {
  /** @type { number } */
  #lhs;

  /** @type { number } */
  #rhs;

  /**
   * @param { number } lhs 
   * @param { number } rhs 
   */
  constructor(lhs, rhs) {
    this.#lhs = lhs;
    this.#rhs = rhs;
  }

  /** @returns { number } */
  sum() {
    return this.#lhs + this.#rhs;
  }

  /** @returns { number } */
  sub() {
    return this.#lhs - this.#rhs;
  }

  /** @returns { number } */
  mul() {
    return this.#lhs * this.#rhs;
  }

  /** @param { number } */
  div() {
    return this.#lhs / this.#rhs;
  }

  /** @enum */
  static METHOD_NAMES = {
    SUM: "sum",
    SUB: "sub",
    MUL: "mul",
    DIV: "div",
  }
}