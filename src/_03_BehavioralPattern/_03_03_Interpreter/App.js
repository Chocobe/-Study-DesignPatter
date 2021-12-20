import PostfixParser from "./PostfixParser.js";

/**
 * @typedef { import("./PostfixExpression").default } PostfixExpression
 */

const expression = PostfixParser.parse("xyz+-");
const result = expression.interpret({
  x: 1,
  y: 2,
  z: 3,
});

console.log(`결과: ${result}`);
