/**
 * @typedef { import("./Shape").default } Shape
 */

export default class Device {
  /**
   * @abstract
   * @param { Shape } _shape 
   */
  print(_shape) {
    throw new Error("Device.print() 는 Abstract Method 입니다.");
  }
}