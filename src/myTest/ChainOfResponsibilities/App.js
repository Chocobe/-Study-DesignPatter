import EolCalculatorHandler from "./EolCalculatorHandler.js";
import DocCalculatorHandler from "./DocCalculatorHandler.js";
import AuthCalculatorHandler from "./AuthCalculatorHandler.js";
import PrintCalculatorHandler from "./PrintCalculatorHandler.js";

import Calculator from "./Calculator.js";

const handler = new EolCalculatorHandler(
  new DocCalculatorHandler(
    new AuthCalculatorHandler(
      new PrintCalculatorHandler()
    )
  )
);

const calculator = new Calculator(10, 2);

handler.execute(calculator, "SUM");
handler.execute(calculator, "SUB");
handler.execute(calculator, "MUL");
handler.execute(calculator, "DIV");
