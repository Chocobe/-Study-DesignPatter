export default class PostfixExpression {
  /**
   * @abstract
   * @param { { [key: string]: number } } _context 
   * @returns { number }
   */
  interpret(_context) {
    throw new Error("PostfixExpression.interpret() 는 Abstract Method 입니다.");
  }
}