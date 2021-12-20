import VariableExpression from "./VariableExpression.js";
import PlusExpression from "./PlusExpression.js";
import MinusExpression from "./MinusExpression.js";

/**
 * @typedef { import("./PostfixExpression").default } PostfixExpression
 */

export default class PostfixParser {
  /**
   * @param { string } expression
   * @returns { PostfixExpression }
   */
  static parse(expression) {
    /** @type { PostfixExpression[] } */
    const stack = [];
    
    expression.split("").forEach(char => {
      stack.push(PostfixParser._createExpression(char, stack));
    });

    return stack.pop();
  }

  /**
   * @param { string } char 
   * @param { { [key: string]: number }[] } stack 
   */
  static _createExpression(char, stack) {
    switch(char) {
      case "+": {
        return new PlusExpression(stack.pop(), stack.pop());
      }

      case "-": {
        const rhs = stack.pop();
        const lhs = stack.pop();
        return new MinusExpression(lhs, rhs);
      }

      default: {
        return new VariableExpression(char);
      }
    }
  }
}