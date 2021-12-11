import CalculatorHandler from "./CalculatorHandler.js";
import Calculator from "./Calculator.js";

export default class AuthCalculatorHandler extends CalculatorHandler {
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
    console.log(`[${methodName}] 권한 확인 완료`);
    super.execute(calculator, methodName);
  }
}