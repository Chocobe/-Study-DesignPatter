import CalculatorHandler from "./CalculatorHandler.js";
import Calculator from "./Calculator.js";

export default class PrintCalculatorHandler extends CalculatorHandler {
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
    console.log(`연산결과: ${calculator[Calculator.METHOD_NAMES[methodName]]?.()}`);
    super.execute(calculator, methodName);
  }
}