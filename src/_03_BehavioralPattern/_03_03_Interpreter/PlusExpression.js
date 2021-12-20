import PostfixExpression from "./PostfixExpression.js";

export default class PlusExpression extends PostfixExpression {
  /** @type { PostfixExpression } */
  #lhs;
  
  /** @type { PostfixExpression } */
  #rhs;

  /**
   * @param { PostfixExpression } lhs 
   * @param { PostfixExpression } rhs 
   */
  constructor(lhs, rhs) {
    super();
    this.#lhs = lhs;
    this.#rhs = rhs;
  }

  /**
   * @override
   * @param {{ [key: string]: number }} context 
   * @returns { number }
   */
  interpret(context) {
    return this.#lhs.interpret(context) + this.#rhs.interpret(context);
  }
}