import ShipPartsFactory from "./shipPartsFactory.js";
import WhiteProAnchor from "./whiteProAnchor.js";
import WhiteProWheel from "./whiteProWheel.js";

/**
 * @typedef { import("./Anchor").default } Anchor
 * @typedef { import("./Wheel").default } Wheel
 */

export default class WhiteProPartsFactory extends ShipPartsFactory {
  constructor() {
    super();
  }

  /** @returns { Anchor } */
  createAnchor() {
    return new WhiteProAnchor("흰색 Pro Anchor");
  }

  /** @returns { Wheel } */
  createWheel() {
    return new WhiteProWheel("White Pro Wheel");
  }
}