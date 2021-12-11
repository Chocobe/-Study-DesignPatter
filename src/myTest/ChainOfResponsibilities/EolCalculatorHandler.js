import CalculatorHandler from "./CalculatorHandler.js";
import Calculator from "./Calculator.js";

export default class EolCalculatorHandler extends CalculatorHandler {
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
    console.log();
    super.execute(calculator, methodName);
  }
}