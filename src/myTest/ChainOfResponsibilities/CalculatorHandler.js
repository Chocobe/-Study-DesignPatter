import Calculator from "./Calculator.js";

export default class CalculatorHandler {
  /** @type { CalculatorHandler } */
  #nextHandler;

  /** @param { CalculatorHandler } nextHandler */
  constructor(nextHandler) {
    this.#nextHandler = nextHandler;
  }

  /**
   * @param { Calculator } calculator 
   * @param { keyof typeof Calculator.METHOD_NAMES } methodName
   */
  execute(calculator, methodName) {
    this.#nextHandler?.execute(calculator, methodName);
  }
}