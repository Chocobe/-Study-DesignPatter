import CalculatorHandler from "./CalculatorHandler.js";
import Calculator from "./Calculator.js";

export default class DocCalculatorHandler extends CalculatorHandler {
  /** @param { CalculatorHandler } nextHandler */
  constructor(nextHandler) {
    super(nextHandler);
  }

  /**
   * @override
   * @param { Calculator } calculator 
   * @param { keyof typeof Calculator.METHOD_NAMES } methodName 
   */
  execute(calculator, methodName) {
    console.log("=== Chain of Responsibilities Pattern ===");
    super.execute(calculator, methodName);
    console.log("=== ********************************* ===");
  }
}