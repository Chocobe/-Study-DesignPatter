/**
 * @typedef { import("./Device").default } Device
 */

export default class Shape {
  /**
   * @abstract
   * @param { Device } _device 
   */
  accept(_device) {
    throw new Error("Shape.accept() 는 Abstract Method 입니다.");
  }
}