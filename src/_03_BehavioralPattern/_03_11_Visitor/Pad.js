import Device from "./Device.js";

import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
import Circle from "./Circle.js";
import Star from "./Star.js";

/**
 * @typedef { import("./Shape").default } Shape
 */

export default class Pad extends Device {
  constructor() {
    super();
  }

  /**
   * @override
   * @param { Shape } shape 
   */
  print(shape) {
    switch(shape.constructor) {
      case Rectangle: {
        console.log("* Print Rectangle To Pad");
        break;
      }

      case Triangle: {
        console.log("* Print Triangle To Pad");
        break;
      }

      case Circle: {
        console.log("* Print Circle To Pad");
        break;
      }

      case Star: {
        console.log("* Print Star To Pad");
        break;
      }
    }
  }
}