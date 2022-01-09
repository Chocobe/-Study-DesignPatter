import Shape from "./Shape.js";

/**
 * @typedef { import("./Device").default } Device
 */

export default class Rectangle extends Shape {
  constructor() {
    super();
  }

  /**
   * @override
   * @param { Device } device 
   */
  accept(device) {
    device.print(this);
  }
}