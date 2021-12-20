import PostfixExpression from "./PostfixExpression.js";

export default class VariableExpression extends PostfixExpression {
  /** @type { string } */
  #contextKey

  /** @param { string } contextKey */
  constructor(contextKey) {
    super();
    this.#contextKey = contextKey;
  }

  /**
   * @override
   * @param { { [key: string]: number }} context
   * @returns { number }
   */
  interpret(context) {
    return context[this.#contextKey];
  }
}