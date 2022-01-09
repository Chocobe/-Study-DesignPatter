import Device from "./Device.js";

import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
import Circle from "./Circle.js";
import Star from "./Star.js";

/**
 * @typedef { import("./Shape").default } Shape
 */

export default class Watch extends Device {
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
        console.log("= Print Rectangle To Watch");
        break;
      }

      case Triangle: {
        console.log("= Print Triangle To Watch");
        break;
      }

      case Circle: {
        console.log("= Print Circle to Watch");
        break;
      }

      case Star: {
        console.log("= Print Star To Watch");
        break;
      }
    }
  }
}