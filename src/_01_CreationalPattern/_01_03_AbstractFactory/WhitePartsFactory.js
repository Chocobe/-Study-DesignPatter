import ShipPartsFactory from "./shipPartsFactory.js";
import WhiteAnchor from "./WhiteAnchor.js";
import WhiteWheel from "./WhiteWheel.js";

/**
 * @typedef { import("./Anchor").default } Anchor
 * @typedef { import("./Wheel").default } Wheel
 */

export default class WhitePartsFactory extends ShipPartsFactory {

  constructor() {
    super();
  }

  /** 
   * @override 
   * @returns { Anchor }
   */
  createAnchor() {
    return new WhiteAnchor("흰색 Anchor");
  }

  /**
   * @override
   * @returns { Wheel }
   */
  createWheel() {
    return new WhiteWheel("White Wheel");
  }
}